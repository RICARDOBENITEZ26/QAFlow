import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("renders the temporary QAFlow foundation page", () => {
    render(<HomePage />);

    expect(screen.getByRole("heading", { name: "QAFlow" })).toBeInTheDocument();
    expect(screen.getByText("Modern QA Test Management Platform")).toBeInTheDocument();
    expect(screen.getByText("Project Foundation")).toBeInTheDocument();
  });
});
