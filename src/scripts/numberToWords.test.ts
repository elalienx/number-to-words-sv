// Node modules
import { describe, expect, test } from "vitest";

// Project files
import numberToWords from "./numberToWords";

describe("Edge cases", () => {
  test("Expect 0 to be noll", () => {
    // Arrange
    const value = 0;
    const result = "noll";

    // Act
    const test = numberToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 1_000_000_000_000_000 to return error message", () => {
    // Arrange
    const value = 1_000_000_000_000_000;
    const result = "Nummer är för stort";

    // Act
    const test = numberToWords(value);

    // Assert
    expect(test).toBe(result);
  });
});

describe("Big numbers", () => {
  test("Expect 1,000 to be etttusen", () => {
    // Arrange
    const value = 1_000;
    const result = "etttusen";

    // Act
    const test = numberToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 2,000 to be tvåtusen", () => {
    // Arrange
    const value = 2_000;
    const result = "tvåtusen";

    // Act
    const test = numberToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 21,584 to be ca tjugoetttusen", () => {
    // Arrange
    const value = 21_584;
    const result = "ca tjugoetttusen";

    // Act
    const test = numberToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 300,000 to be trehundratusen", () => {
    // Arrange
    const value = 300_000;
    const result = "trehundratusen";

    // Act
    const test = numberToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 875,324 to be ca åttahundrasjuttiofemtusen", () => {
    // Arrange
    const value = 875_324;
    const result = "ca åttahundrasjuttiofemtusen";

    // Act
    const test = numberToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 999,999 to be ca niohundratusen", () => {
    // Arrange
    const value = 999_999;
    const result = "ca niohundratusen";

    // Act
    const test = numberToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 1'000,000 to be 1 miljon", () => {
    // Arrange
    const value = 1_000_000;
    const result = "1 miljon";

    // Act
    const test = numberToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 1'000,001 to be ca 1 miljon", () => {
    // Arrange
    const value = 1_000_001;
    const result = "ca 1 miljon";

    // Act
    const test = numberToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 625'000,000 to be 625 miljoner", () => {
    // Arrange
    const value = 625_000_000;
    const result = "625 miljoner";

    // Act
    const test = numberToWords(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 625'400,200 to be ca 625 miljoner", () => {
    // Arrange
    const value = 625_400_200;
    const result = "ca 625 miljoner";

    // Act
    const test = numberToWords(value);

    // Assert
    expect(test).toBe(result);
  });
});
