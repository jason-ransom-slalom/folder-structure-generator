import { render } from "@testing-library/react";
import Breadcrumbs from "../Breadcrumbs";

describe("Breadcrumbs", () => {
  it("renders folders and files seperated by forward slash and spaces", () => {
    const { queryByText } = render(<Breadcrumbs inputItems={["folder1", "folder2", "file1.txt"]} />);

    expect(queryByText("folder1 / folder2 / file1.txt")).toBeInTheDocument();
  });

  // it.todo("renders text in UPPERCASE");
  // it.todo("appends '(root folder)' to the end of folders.");
  // it.todo("appends '(root file)' to the end of files");
  // it.todo("appends '(level X folder)' to the end of nested folders");
  // it.todo("appends '(level X file)' to the end of nested files");
  // it.todo("truncates inner paths longer than 2 levels deep  with an ellipsis");
});
