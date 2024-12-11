import { PDFDocument } from "pdf-lib";
import fs from "fs/promises";
import path from "path";

export async function mergePdfs(filePath1, filePath2, otherFilePaths) {
  const filePaths = [filePath1, filePath2, ...otherFilePaths];

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
  const filePath = path.resolve(`finalpdf.pdf`);
  fs.writeFile(filePath, pdfBytes);
}

export async function removePages(filePath, pageNumbers, options) {
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
  const savedPath = path.resolve(`pdfRemoved.pdf`);
  fs.writeFile(savedPath, pdfBytes);
}
