/*
  FIle actions for handling file documents locally 
*/
import fs from "fs/promises";
import path from "path";
import { confirm, input } from "@inquirer/prompts";
import { program } from "commander";

const removedDirectoryPath = path.resolve("./removed");

/*
  Saves the document to the removed directory. Creates the removed directory if it does not exist.
*/
export async function saveDocument(doc, filePath, name, action) {
  try {
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
  } catch (error) {
    if (error instanceof Error && error.name === "ExitPromptError") {
      // Ctrl - C command, silence this error
    } else {
      throw error;
    }
  }
}

/*
  Checks if the removed directory folder exists.
*/
export async function removedDirectoryExists() {
  return await fs
    .access(removedDirectoryPath)
    .then(() => true)
    .catch(() => false);
}

/*
  Checks if a duplicate file exists in the removed directory.
*/
export async function duplicateFileExists(fileName) {
  const filePath = path.join(removedDirectoryPath, fileName);
  return await fs
    .access(filePath)
    .then(() => true)
    .catch(() => false);
}

/*
  Generates a new file name for the document. 

  If --name option is not specified, default file name would be the original file name with the action appended.
  If --name option is specified, the file name would be the specified name with the original file extension appended.
*/
export async function createFileName(filePath, name, action) {
  const ext = path.extname(filePath);
  const fileName = path.basename(filePath, ext);
  let savedName =
    name == undefined ? fileName + action + ext : name.split(".")[0] + ext;

  if (await duplicateFileExists(savedName)) {
    savedName = await handleDuplicateFile(savedName);
  }

  return savedName;
}

/*
  Generates a new file name depending on user input.
  
  If user decides to override, the original savedName is returned.
  If user decides to rename, the new name specified by user is returned.
*/
export async function handleDuplicateFile(savedName) {
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

/*
  Checks if the file extension is valid. The file extension should be .pdf.
*/
export function checkFileExtension(filePaths) {
  filePaths.forEach((element) => {
    if (path.extname(element) !== ".pdf") {
      program.error("Invalid file extension. Please provide a valid PDF file.");
    }
  });
}

export function checkFileAvailability(filePaths) {
  filePaths.forEach((element) => {
    fs.access(element).catch(() => {
      program.error(
        `"${element}" does not exist. Please specify a valid file.`
      );
    });
  });
}
