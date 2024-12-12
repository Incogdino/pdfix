/*
  Actions for saving documents locally 
*/
import fs from "fs/promises";
import path from "path";

const removedDirectoryPath = "./removed";

/*
  Saves the document to the removed directory. Creates the removed directory if it does not exist.
*/
export async function saveDocument(doc, filePath, name, action) {
  const fileName = createFileName(filePath, name, action);
  const savedPath = path.resolve(removedDirectoryPath + "/" + fileName);

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
function createFileName(filePath, name, action) {
  const ext = path.extname(filePath);
  const fileName = path.basename(filePath, ext);

  return name == undefined ? fileName + action + ext : name + action + ext;
}
