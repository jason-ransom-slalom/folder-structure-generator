import { render } from "@testing-library/react";
import Folder from "../Folder";

describe("Folder", () => {
  // This is a starter test and eventually
  // should be modified and/or deleted.
  it("renders the folder placeholder", () => {
    const { queryByText } = render(<Folder />);

    expect(queryByText("Folder Placeholder")).toBeInTheDocument();
  });
});
