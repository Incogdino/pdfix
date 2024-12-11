/*
    Actions for saving documents locally 
*/

import fs from "fs/promises";
import path from "path";

const removedDirectoryPath = "./removed";

export async function saveDocument(doc, filePath) {
  if (await removedDirectoryExists()) {
    const savedPath = path.resolve(removedDirectoryPath + "/" + filePath);
    fs.writeFile(savedPath, doc);
    return;
  }

  fs.mkdir(removedDirectoryPath).then(() => {
    const savedPath = path.resolve(removedDirectoryPath + "/" + filePath);
    fs.writeFile(savedPath, doc);
  });
}

async function removedDirectoryExists() {
  return fs
    .access(removedDirectoryPath)
    .then(() => true)
    .catch(() => false);
}
