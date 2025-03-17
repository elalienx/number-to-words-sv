// Node modules
import { describe, expect, test } from "vitest";

// Project files
import convertBelowThousand from "./convertBelowThousand";

describe("Edge cases", () => {
  test("Expect 0 to be noll", () => {
    // Arrange
    const value = 0;
    const result = "noll";

    // Act
    const test = convertBelowThousand(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 1000 to return empty", () => {
    // Arrange
    const value = 1000;
    const result = "";

    // Act
    const test = convertBelowThousand(value);

    // Assert
    expect(test).toBe(result);
  });
});

describe("Normal cases", () => {
  test("Expect 1 to be ett", () => {
    // Arrange
    const value = 1;
    const result = "ett";

    // Act
    const test = convertBelowThousand(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 23 to be tjugotre", () => {
    // Arrange
    const value = 23;
    const result = "tjugotre";

    // Act
    const test = convertBelowThousand(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 100 to be etthundra", () => {
    // Arrange
    const value = 100;
    const result = "etthundra";

    // Act
    const test = convertBelowThousand(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 123 to be etthundratjugotre", () => {
    // Arrange
    const value = 123;
    const result = "etthundratjugotre";

    // Act
    const test = convertBelowThousand(value);

    // Assert
    expect(test).toBe(result);
  });

  test("Expect 999 to be niohundra nittio nio", () => {
    // Arrange
    const value = 999;
    const result = "niohundranittionio";

    // Act
    const test = convertBelowThousand(value);

    // Assert
    expect(test).toBe(result);
  });
});
