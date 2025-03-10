// Node modules
import { test, expect, describe } from "vitest";

// Project files
import hundredsToWords from "./hundredsToWords";

describe("Edge cases", () => {
  test("Returns message if number is negative", () => {
    // Arrange
    const value = -1;
    const result = "Cannot calculate negative numbers";

    // Act
    const test = hundredsToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Returns message if number is over 900", () => {
    // Arrange
    const value = 1_000;
    const result = "Cannot calculate numbers over 999";

    // Act
    const test = hundredsToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Returns zero", () => {
    // Arrange
    const value = 0;
    const result = "zero";

    // Act
    const test = hundredsToWords(value);

    // Assert
    expect(test).toBe(result);
  });
});

describe("Normal use", () => {
  test("Returns one", () => {
    // Arrange
    const value = 1;
    const result = "one";

    // Act
    const test = hundredsToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Returns eleven", () => {
    // Arrange
    const value = 11;
    const result = "eleven";

    // Act
    const test = hundredsToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Returns one hundred eleven", () => {
    // Arrange
    const value = 111;
    const result = "one hundred eleven";

    // Act
    const test = hundredsToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Returns nine hundred ninety-nine", () => {
    // Arrange
    const value = 999;
    const result = "nine hundred ninety-nine";

    // Act
    const test = hundredsToWords(value);

    // Assert
    expect(test).toBe(result);
  });
});
