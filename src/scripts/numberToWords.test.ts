// Node modules
import { describe, expect, test } from "vitest";

// Project files
import numberToWordsSV from "./numberToWords";

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
    const result = "Nummer är för stort";

    // Act
    const test = numberToWordsSV(value);

    // Assert
    expect(test).toBe(result);
  });
});

describe("Big numbers", () => {
  test("Expect 21,584 to be ca 21 tusen", () => {
    // Arrange
    const value = 21_584;
    const result = "ca 21 tusen";

    // Act
    const test = numberToWordsSV(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 300,000 to be 300 tusen", () => {
    // Arrange
    const value = 300_000;
    const result = "300 tusen";

    // Act
    const test = numberToWordsSV(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 999,999 to be ca 999 tusen", () => {
    // Arrange
    const value = 999_999;
    const result = "ca 999 tusen";

    // Act
    const test = numberToWordsSV(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 1'000,000 to be 1 miljon", () => {
    // Arrange
    const value = 1_000_000;
    const result = "1 miljon";

    // Act
    const test = numberToWordsSV(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 1'000,001 to be ca 1 miljon", () => {
    // Arrange
    const value = 1_000_001;
    const result = "ca 1 miljon";

    // Act
    const test = numberToWordsSV(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 625'000,000 to be 625 miljoner", () => {
    // Arrange
    const value = 625_000_000;
    const result = "625 miljoner";

    // Act
    const test = numberToWordsSV(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 625'400,200 to be ca 625 miljoner", () => {
    // Arrange
    const value = 625_400_200;
    const result = "ca 625 miljoner";

    // Act
    const test = numberToWordsSV(value);

    // Assert
    expect(test).toBe(result);
  });
});
