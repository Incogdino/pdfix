/*
  Actions for saving documents locally 
*/
import fs from "fs/promises";
import path from "path";
import { confirm, input } from "@inquirer/prompts";

const removedDirectoryPath = path.resolve("./removed");

/*
  Saves the document to the removed directory. Creates the removed directory if it does not exist.
*/
export async function saveDocument(doc, filePath, name, action) {
  const fileName = await createFileName(filePath, name, action);
  const savedPath = path.join(removedDirectoryPath, fileName);

  if (await removedDirectoryExists()) {
    fs.writeFile(savedPath, doc);
    return;
  } else {
    fs.mkdir(removedDirectoryPath).then(() => {
      fs.writeFile(savedPath, doc);
    });
  }
}

/*
  Checks if the removed directory folder exists.
*/
async function removedDirectoryExists() {
  return fs
    .access(removedDirectoryPath)
    .then(() => true)
    .catch(() => false);
}

/*
  Generates a new file name for the document. 

  If --name option is not specified, default file name would be the original file name with the action appended.
  If --name option is specified, the file name would be the specified name with the original file extension appended.
*/
async function createFileName(filePath, name, action) {
  const ext = path.extname(filePath);
  const fileName = path.basename(filePath, ext);
  let savedName =
    name == undefined ? fileName + action + ext : name + action + ext;

  if (await duplicateFileExists(savedName)) {
    savedName = await handleDuplicateFile(savedName);
  }

  return savedName;
}

/*
  Checks if a duplicate file exists in the removed directory.
*/
function duplicateFileExists(fileName) {
  const filePath = path.join(removedDirectoryPath, fileName);
  return fs
    .access(filePath)
    .then(() => true)
    .catch(() => false);
}

/*
  Generates a new file name depending on user input.
  
  If user decides to override, the original savedName is returned.
  If user decides to rename, the new name specified by user is returned.
*/
async function handleDuplicateFile(savedName) {
  let newName;
  let duplicateExists;
  let toOverride;

  do {
    toOverride = await confirm({
      message:
        "A file with the same name already exists. Are you sure you want to override it?",
      default: false,
      required: true,
    });

    if (toOverride) {
      return savedName;
    }

    newName = await input({
      message: "Please enter a new name for the file",
      required: true,
    });
    newName = newName + path.extname(savedName);

    duplicateExists = await duplicateFileExists(newName);
  } while (!toOverride && duplicateExists);

  return newName;
}
