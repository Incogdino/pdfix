import { PDFDocument } from "pdf-lib";
import fs from "fs/promises";
import { saveDocument, checkFileExtension } from "./fileActions.js";

export async function removePages(filePath, pageNumbers, options) {
  checkFileExtension([filePath]);
  checkFileAvailability([filePath]);

  const file = await fs
    .readFile(filePath)
    .then((buffer) => PDFDocument.load(buffer));
  const newDoc = await PDFDocument.create();

  // Get list of pages to keep
  const toRemove = pageNumbers
    .split(options.seperator)
    .map((index) => parseInt(index) - 1);
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
