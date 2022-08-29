import { render } from "@testing-library/react";
import Breadcrumbs from "../Breadcrumbs";

describe("Breadcrumbs", () => {
  it("renders folders and files seperated by forward slash and spaces", () => {
    const { queryByText } = render(<Breadcrumbs inputItems={["folder1", "folder2", "file1.txt"]} />);

    // false passed to be case-insensitive
    expect(queryByText("folder1 / folder2 / file1.txt", { exact: false })).toBeInTheDocument();
  });

  it("renders text in UPPERCASE with file extensions in lowercase", () => {
    const { queryByText } = render(<Breadcrumbs inputItems={["folder1", "folder2", "file1.txt"]} />);

    // true passed to be case-sensitive
    expect(queryByText("FOLDER1 / FOLDER2 / FILE1.txt", { exact: true })).toBeInTheDocument();
  });

  // it.todo("appends '(root folder)' to the end of folders.");
  // it.todo("appends '(root file)' to the end of files");
  // it.todo("appends '(level X folder)' to the end of nested folders");
  // it.todo("appends '(level X file)' to the end of nested files");
  // it.todo("truncates inner paths longer than 2 levels deep  with an ellipsis");
});
