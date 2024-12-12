import { PDFDocument } from "pdf-lib";
import fs from "fs/promises";
import { saveDocument, checkFileExtension } from "./fileActions.js";

export async function mergePdfs(filePath1, filePath2, otherFilePaths, options) {
  const filePaths = [filePath1, filePath2, ...otherFilePaths];
  checkFileExtension(filePaths);

  const pdfData = await Promise.all(
    filePaths.map((filePath) =>
      fs.readFile(filePath).then((buffer) => PDFDocument.load(buffer))
    )
  );

  const newDoc = await PDFDocument.create();

  for (let i = 0; i < pdfData.length; i++) {
    const data = pdfData[i];
    const pages = await newDoc.copyPages(data, data.getPageIndices());
    pages.forEach((page) => {
      newDoc.addPage(page);
    });
  }

  const pdfBytes = await newDoc.save();
  saveDocument(pdfBytes, filePath1, options.name, "-merged");
}

export async function removePages(filePath, pageNumbers, options) {
  checkFileExtension([filePath]);

  const file = await fs
    .readFile(filePath)
    .then((buffer) => PDFDocument.load(buffer));
  const newDoc = await PDFDocument.create();

  const toRemove = pageNumbers
    .split(options.seperator)
    .map((index) => Number(index));
  const toKeep = await file
    .getPageIndices()
    .filter((index) => !toRemove.includes(index));

  const pages = await newDoc.copyPages(file, toKeep);
  pages.forEach((page) => {
    newDoc.addPage(page);
  });

  const pdfBytes = await newDoc.save();
  saveDocument(pdfBytes, filePath, options.name, "-removed");
}
