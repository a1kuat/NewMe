import capitalizeFirstLetter from "./capitalizeFirstLetter";
import { describe, test, expect } from "@jest/globals";

describe("", () => {
  test("Word with small letter", () => {
    const word = "aboba";

    expect(capitalizeFirstLetter(word)).toBe("Aboba");
  });

  test("Word with capital letter", () => {
    const word = "Aboba";

    expect(capitalizeFirstLetter(word)).toBe("Aboba");
  });

  test("Word starting with number", () => {
    const word = "4boba";

    expect(capitalizeFirstLetter(word)).toBe("4boba");
  });
});
