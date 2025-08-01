import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import SearchBar from "../SearchBar";

describe("SearchBar", () => {
  test("actualiza el valor del input cuando el usuario lo escribe", () => {
    const mockOnSearch = vi.fn();

    render(<SearchBar onSearch={mockOnSearch} />);

    const inputElement = screen.getByRole("textbox") as HTMLInputElement;
    const testQuery = "Buenos Aires";

    fireEvent.change(inputElement, { target: { value: testQuery } });

    expect(inputElement.value).toBe(testQuery);
  });

  test("llama a la función onSearch con el valor correcto al hacer clic en el botón", () => {
    const mockOnSearch = vi.fn();

    render(<SearchBar onSearch={mockOnSearch} />);

    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByRole("button", { name: /Search/i });
    const testQuery = "Lima, Perú";

    fireEvent.change(inputElement, { target: { value: testQuery } });
    fireEvent.click(buttonElement);

    expect(mockOnSearch).toHaveBeenCalled();
    expect(mockOnSearch).toHaveBeenCalledWith(testQuery);
  });
});
