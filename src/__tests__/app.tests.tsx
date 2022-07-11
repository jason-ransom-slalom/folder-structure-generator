import { render } from "@testing-library/react";
import App from "../App";

describe("Breadcrumbs", () => {
  it("renders the breadcrumbs", () => {
    const { container } = render(<App />);

    expect(container.querySelector(".breadcrumbs")).toBeInTheDocument();
  });

  it("renders a folder", () => {
    const { container } = render(<App />);

    expect(container.querySelector(".folder")).toBeInTheDocument();
  });
});
