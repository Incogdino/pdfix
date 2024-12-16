<frontmatter>
  title: Commands
</frontmatter>

<br>

# Commands

This section provides an overview of all available commands and options available in PDFix.

---

## Summary of Commands

A high level summary of the list of available commands and what they do are listed below. For more specific details, please refer to the individual commands [below](#the-help-command) for the specific command.

<center>

| Command                                                       |         Options         |                 Arguments                  |                                                       Description                                                       |
| :------------------------------------------------------------ | :---------------------: | :----------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| [`removePages`](#remove-pages-from-a-pdf-file-removepages)    | `--seperator`, `--name` |         `<filePath> <pageNumbers>`         |                                         Removes specified pages from a pdf file                                         |
| [`extractPages`](#extract-pages-from-a-pdf-file-extractpages) | `--seperator`, `--name` |         `<filePath> <pageNumbers>`         |                                        Extracts specified pages from a pdf file                                         |
| [`merge`](#merge-pages-from-pdf-files-merge)                  |        `--name`         | `<filePath1> <filePath2> [otherFilePaths]` | Takes in two or more pdf files and merges them one after the other in the order specified by the input to the arguments |
| [`help`](#the-help-command)                                   |            -            |                     -                      |                              Returns a help page describing the list of commands avaialble                              |

</center>

---

## <i class="fa-regular fa-circle-question"></i> The help command

The `help` command displays a list of all available commands by default.

<box type="definition" light>

**Format:** `pdfix help`

</box>

To display usage information of a single command, call `pdfix <command> --help`.

This displays a more detailed description of the individual commands with options available.

---

## <i class="fa-solid fa-list"></i> List of commands

This part provides an in-depth view of each individual command and what they do.

### <i class="fa-solid fa-delete-left"></i> Remove pages from a pdf file: `removePages`

The `removePages` command removes specified pages from the specified pdf file.

<box type="definition" light>

**Format:** `pdfix removePages <filePath> "<pageNumber>" --seperator " " --name "name"`

</box>

<box type="important">

`<pageNumber>` needs to be enclosed in quotations `"` for the program to render the selected pages correctly.
</box>

<box type="success" light>

**Arguments**

- `<filePath>` - mandatory file path of the pdf file to modify. File path can be relative or absolute.
- `<pageNumber>` - mandatory comma seperated number. If `--seperator` is defined, then string defined should be seperated by the defined seperator.
  </box>

<box type="success" light>

**Options**

- `--seperator` or `-s` - defines a custom seperator for seperating the pages. (Default: ",")
- `--name` or `-n` - defines a custom file name to save the modified pdf file.
  </box>

<box type="info" light>
    Out of bounds pages of the pdf file are ignored (i.e. page 10 is specified but the pdf only has 5 pages)
</box>

Examples:

- `pdfix removePages ./firstPdf.pdf 1,3,5` - remove page 1,3 and 5 from the pdf file
- `pdfix removePages ./firstPdf.pdf 1/3/5 --seperator "/" --name modifiedPdf.pdf` - removes page 1,3 and 5 into a new pdf file named `modifiedPdf.pdf`.

---

### <i class="fa-solid fa-delete-left"></i> Extract pages from a pdf file: `extractPages`

The `extractPages` command removes specified pages from the specified pdf file into a new pdf file.

<box type="definition" light>

**Format:** `pdfix extractPages <filePath> "<pageNumber>" --seperator " " --name "name"`

</box>

<box type="important">

`<pageNumber>` needs to be enclosed in quotations `"` for the program to render the selected pages correctly.
</box>

<box type="success" light>

**Arguments**

- `<filePath>` - mandatory file path of the pdf file to modify. File path can be relative or absolute.
- `<pageNumber>` - mandatory comma seperated number. If `--seperator` is defined, then string defined should be seperated by the defined seperator.
  </box>

<box type="success" light>

**Options**

- `--seperator` or `-s` - defines a custom seperator for seperating the pages. (Default: ",")
- `--name` or `-n` - defines a custom file name to save the modified pdf file.
  </box>

<box type="info" light>
    Out of bounds pages of the pdf file are ignored (i.e. page 10 is specified but the pdf only has 5 pages)
</box>

Examples:

- `pdfix extractPages ./firstPdf.pdf 1,3,5` - extracts page 1,3 and 5 into a new pdf file.
- `pdfix extractPages ./firstPdf.pdf 1/3/5 --seperator "/" --name "modifiedPdf"` - extracts page 1,3 and 5 into a new pdf file named `modifiedPdf.pdf`.

---

### <i class="fa-solid fa-code-merge"></i> Merge pages from pdf files: `merge`

The `merge` command merges **two or more** pdf files in the order that they are specified in.

<box type="definition" light>

**Format:** `pdfix merge <filePath1> <filePath1> [otherFilePaths]`

</box>

<box type="success" light>

**Arguments**

- `<filePath1>` - mandatory file path of the first pdf file.
- `<filePath2>` - mandatory file path of the second pdf file.
- `[otherFilePaths]` - optional file path of the pdf files to append.
  </box>

<box type="success" light>

**Options**

- `--name` or `-n` - defines a custom file name to save the modified pdf file.
  </box>

<box type="info" light>
  File paths provided can be absolute or relative file paths.
</box>

Examples:

- `pdfix merge ./firstPdf.pdf ./secondPdf.pdf` - merges the two pdf files one in the order from left to right.
- `pdfix merge ./firstPdf.pdf ./secondPdf.pdf ./thirdPdf.pdf --name "findPdf"` - meges the three pdf file specified from left to right into a new pdf file named `findPdf.pdf`.
