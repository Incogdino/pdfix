#!/usr/bin/env node
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs/promises";
import { program } from "commander";
import path from "path";
import * as actions from "./actions.js";

/*
  Create empty pdf files for testing
*/
program
  .command("create")
  .arguments("<numberOfFiles>")
  .description("Creates specified number of empty pdf files")
  .action(async (numberOfFiles) => {
    for (let i = 0; i < numberOfFiles; i++) {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage();

      const { width, height } = page.getSize();
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

      // Add text to the page before saving the document
      const fontSize = 30;
      page.drawText(`${i}`, {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71),
      });

      // Save the document after the content is added
      const pdfBytes = await pdfDoc.save();
      const filePath = path.resolve(`testpdf${i}.pdf`);

      // Write the PDF bytes to the file
      await fs.writeFile(filePath, pdfBytes);
    }

    console.log(`${numberOfFiles} PDF files created successfully.`);
  });

/*
  Merge pdfs of two specified files

    Usage: merge <filePath1> <filePath2> [otherFilePaths...]
*/
program
  .command("merge")
  .option("-n, --name <fileName>", "Output file name", "pdfix-merged.pdf")
  .arguments("<filePath1> <filePath2> [otherFilePaths...]")
  .description("Merges two or more pdf files into a single pdf file")
  .action(actions.mergePdfs);

/*
  Removes specified pages of specified file

    Usage: removePages --seperator "[seperator]" <filePath> <pageNumbers>
*/
program
  .command("removePages")
  .option("-s, --seperator <char>", "Seperator for page numbers", ",")
  .option("-n, --name <fileName>", "Output file name", "pdfix-removed.pdf")
  .arguments("<filePath> <pageNumbers>")
  .description("Removes specified pages of specified file")
  .action(actions.removePages);

program.parseAsync(process.argv);
