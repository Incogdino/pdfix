<frontmatter>
  title: Commands
</frontmatter>

<br>

# Commands

This section provides an overview of all available commands and options available in PDFix.

---

## Summary of Commands

This part provides a high level summary of the list of available commands and what they do. For more specific details, please refer [below](#list-of-commands) for the specific command.

<center>

| Command       |         Options         |                 Arguments                  |                                                       Description                                                       |
| :------------ | :---------------------: | :----------------------------------------: | :---------------------------------------------------------------------------------------------------------------------: |
| `removePages` | `--seperator`, `--name` |         `<filePath> <pageNumbers>`         |                                         Removes specified pages from a pdf file                                         |
| `merge`       |        `--name`         | `<filePath1> <filePath2> [otherFilePaths]` | Takes in two or more pdf files and merges them one after the other in the order specified by the input to the arguments |
| `help`        |            -            |                     -                      |                              Returns a help page describing the list of commands avaialble                              |

</center>

---

## List of commands

This part provides an in-depth view of each individual command and what they do.

### Remove pages from a pdf file: `removePages`

The `removePages` command removes specified pages from the specified pdf file.

<box type="definition" light>

**Format:** `pdfix removePages <filePath> <pageNumber> --seperator " " --name "name"`

</box>