import { formatBreadcrumbs } from "../breadcrumbsUtil";

describe("formatBreadcrumb", () => {
  it("is as function", () => {
    expect(typeof formatBreadcrumbs).toBe("function");
  });

  it("returns each string in uppercase", () => {
    const lowerCaseStrings = ["a", "b", "c"];

    expect(formatBreadcrumbs(lowerCaseStrings)).toMatchObject([
      "A",
      "B",
      "C (level 2 folder)",
    ]);
  });

  it("returns extensions in lowercase", () => {
    const lowerCaseStrings = ["a", "b.txt", "c.a.ts"];

    expect(formatBreadcrumbs(lowerCaseStrings)).toMatchObject([
      "A",
      "B.txt",
      "C.A.ts",
    ]);
  });

  it("has '(root folder) appended if the user is in the root folder' ", () => {
    const lowerCaseStrings = ["TestFolder"];

    expect(formatBreadcrumbs(lowerCaseStrings)).toMatchObject([
      "TESTFOLDER (root folder) ",
    ]);
  });

  it("displays the folder level at the end of the breadcrumb when nested ", () => {
    const lowerCaseStrings = ["TestFolder1", "TestFolder2", "TestFolder3"];

    expect(formatBreadcrumbs(lowerCaseStrings)).toMatchObject([
      "TESTFOLDER1",
      "TESTFOLDER2",
      "TESTFOLDER3 (level 2 folder)",
    ]);
  });
});
