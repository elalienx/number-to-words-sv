// Node modules
import { describe, expect, test } from "vitest";

// Project files
import numberToWordsSV from "./numberToWordsSV";

describe("Edge cases", () => {
  test("Expect 0 to be noll", () => {
    // Arrange
    const value = 0;
    const result = "noll";

    // Act
    const test = numberToWordsSV(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 1_000_000_000_000_000 to return error message", () => {
    // Arrange
    const value = 1_000_000_000_000_000;
    const result = "Nummer är större än gränsen";

    // Act
    const test = numberToWordsSV(value);

    // Assert
    expect(test).toBe(result);
  });
});

describe("Normal cases", () => {
  test("Expect 300_000 to be ett", () => {
    // Arrange
    const value = 300_000;
    const result = "trehundra tusen";

    // Act
    const test = numberToWordsSV(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 999_999 to be ett", () => {
    // Arrange
    const value = 999_999;
    const result = "niohundra nittio nio tusen niohundra nittio nio";

    // Act
    const test = numberToWordsSV(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 1_000_000 to be niohundra nittio nio", () => {
    // Arrange
    const value = 1_000_000;
    // const result = "ett miljon";
    const result = "1 miljon";

    // Act
    const test = numberToWordsSV(value);

    // Assert
    expect(test).toBe(result);
  });
});
