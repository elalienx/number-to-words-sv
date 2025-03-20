// Node modules
import { expect, test } from "vitest";

// Project files
import "./roundNumberWords";
import roundNumberWords from "./roundNumberWords";

test("Keeps the value as it is if is a whole number", () => {
  // Arrange
  const valueA = "1 tusen";
  const valueB = "1 tusen ett";
  const resultA = "1 tusen";
  const resultB = "ca 1 tusen";

  // Act
  const testA = roundNumberWords(valueA);
  const testB = roundNumberWords(valueB);

  // Assert
  expect(testA).toBe(resultA);
  expect(testB).toBe(resultB);
});
