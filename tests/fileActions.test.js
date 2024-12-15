import mock from "mock-fs";
import * as fileActions from "../commands/fileActions.js";
import path from "path";

describe("Save file, removed directory exists", () => {
  beforeEach(() => {
    mock({
      removed: {
        "file.txt": "Some file content",
      },
    });
  });

  afterEach(() => {
    mock.restore(); // Restore the real file system after each test
  });

  test("Check if removed directory exists", async () => {
    const result = await fileActions.removedDirectoryExists();
    expect(result).toBe(true);
  });

  test("Check for duplicate files", async () => {
    const result = await fileActions.duplicateFileExists("file.txt");
    expect(result).toBe(true);
  });

  test("Create new file, file name specified", async () => {
    const result = await fileActions.createFileName(
      path.resolve("test.txt"),
      "newFile",
      "-removed"
    );
    expect(result).toBe("newFile.txt");
  });

  test("Create new file, file name not specified", async () => {
    console.log(path.resolve("test.txt"));
    const result = await fileActions.createFileName(
      path.resolve("test.txt"),
      undefined,
      "-removed"
    );
    expect(result).toBe("test-removed.txt");
  });
});

describe("Check remove directory, does not exist", () => {
  beforeEach(() => {
    mock({});
  });

  afterEach(() => {
    mock.restore(); // Restore the real file system after each test
  });

  test("Check if removed directory exists", async () => {
    const result = await fileActions.removedDirectoryExists();
    expect(result).toBe(false);
  });
});
