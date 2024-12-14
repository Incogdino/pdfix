#!/usr/bin/env node
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";
import fs from "fs/promises";
import { program } from "commander";
import path from "path";
import { mergePdfs } from "./commands/mergeCommand.js";
import { removePages } from "./commands/removePagesCommand.js";

program
  .name("pdfix")
  .version("1.0.0")
  .description("CLI tool for manipulating PDF files safely and efficiently");

/*
  Create empty pdf files for testing
*/
program
  .name("pdfix")
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
  .name("pdfix")
  .command("merge")
  .option(
    "-n, --name <fileName>",
    'output file name. (Default: First file appended with "-merged")'
  )
  .arguments("<filePath1> <filePath2> [otherFilePaths...]")
  .description("Merges two or more pdf files into a single pdf file")
  .action(mergePdfs);

/*
  Removes specified pages of specified file

    Usage: removePages --seperator "[seperator]" <filePath> <pageNumbers>
*/
program
  .name("pdfix")
  .command("removePages")
  .option("-s, --seperator <char>", "seperator for page numbers", ",")
  .option(
    "-n, --name <fileName>",
    'output file name. (Default: First file appended with "-removed")'
  )
  .arguments("<filePath> <pageNumbers>")
  .description("Removes specified pages of specified file")
  .action(removePages);

program.parseAsync(process.argv);
