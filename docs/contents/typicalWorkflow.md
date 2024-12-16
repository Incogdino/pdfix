<frontmatter>
  title: Typical Workflow
</frontmatter>

<br>

# Typical Workflow

This section tells you how PDFix is typically used.

As PDFix does not come with an inbuilt pdf viewer, it is not possible to view the content of the pdf to modify just by using PDFix. Instead, it should be complemented with a pdf viewer like Adobe Acrobat to view and determine the pages to edit if a visual is required.

This is what a typical workflow for PDFix may look like for [removing some pages](./commands.md#remove-pages-from-a-pdf-file-removepages) from a pdf file:

1. Open the pdf file in a pdf viewer such as Adobe Acrobat or your browser

<center>
<img src="../images/openPdfInViewer.png" width="850" alt="Opening pdf file in pdf viewer">

</center>

2. Take note of the pages that you want to remove from the pdf file

3. Run the [`removePages`](./commands.md#remove-pages-from-a-pdf-file-removepages) command from the command line

The updated pdf file will be stored in a seperate folder named `removed` in the same location the command was called.

<box type="tip">
  
  Calling the commands from your desired location will cause PDFix to create the `removed` folder from your current location. 
</box>

For more information on the available commands, please refer to the [Commands](./commands.md) page.
