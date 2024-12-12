<frontmatter>
  title: Typical Workflow
</frontmatter>

<br>

# Typical Workflow

This section tells you how PDFix is typically used.

PDFix is not meant to be used as a standalone tool. It should be used to complement other document tools. For instance, a pdf viewer like Adobe Acrobat should be used alongside PDFix to view and determine the pages to remove.

This is what a typical workflow for PDFix may look like for removing some pages off a pdf file:

1. Open the pdf file in a pdf viewer such as Adobe Acrobat or your browser

<center>
<img src="../images/openPdfInViewer.png" width="850" alt="Opening pdf file in pdf viewer">

</center>

2. Take note of the pages that you want to remove from the pdf file

3. Run the [`removePages`]() command from the command line

The updated pdf file will be stored in a seperate folder named `updated` in the same location the command was called.

<box type="tip">
  
  Navigate to your desired location and issue the commands from that location. This will cause PDFix to create the `removed` folder from your current location. 
</box>
