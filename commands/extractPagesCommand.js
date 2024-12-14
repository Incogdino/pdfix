import { PDFDocument } from "pdf-lib";
import fs from "fs/promises";
import { saveDocument, checkFileExtension } from "./fileActions.js";

export async function extractPages(filePath, pageNumbers, options) {
  checkFileExtension([filePath]);
  const file = await fs
    .readFile(filePath)
    .then((buffer) => PDFDocument.load(buffer));
  const newDoc = await PDFDocument.create();

  // Get list of pages to keep
  const toExtract = pageNumbers
    .split(options.seperator)
    .map((index) => parseInt(index) - 1);
  const toCopy = await file
    .getPageIndices()
    .filter((index) => toExtract.includes(index));

  const pages = await newDoc.copyPages(file, toCopy);
  pages.forEach((page) => {
    newDoc.addPage(page);
  });

  const pdfBytes = await newDoc.save();
  saveDocument(pdfBytes, filePath, options.name, "-extract");
}
