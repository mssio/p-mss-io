import { randomInt } from "crypto";

const DIGITS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Generate a uniformly distributed integer between `start` and `end`, inclusive.
 *
 * @param start - The inclusive lower bound of the range
 * @param end - The inclusive upper bound of the range
 * @returns An integer between `start` and `end`, inclusive
 */
function randomInRange(start: number, end: number): number {
  return randomInt(start, end + 1);
}

/**
 * Generate an 18-character password formatted as three groups of six characters separated by hyphens.
 *
 * The password contains at least one uppercase letter and at least one digit.
 *
 * @returns An 18-character string in the form `xxxxxx-xxxxxx-xxxxxx` that includes at least one uppercase letter and one digit.
 */
export function generatePassword(): string {
  // Ensure at least one uppercase and one digit.
  const uppercaseIndex = randomInRange(0, 17);
  let digitIndex = randomInRange(0, 17);
  if (digitIndex === uppercaseIndex) {
    digitIndex = (digitIndex + 1) % 18;
  }

  const indices: number[] = [];
  for (let i = 0; i < 18; i++) {
    // Default to lowercase letters (10–35).
    indices.push(randomInRange(10, 35));
  }

  // Force required character classes.
  indices[uppercaseIndex] = randomInRange(36, 61); // A–Z
  indices[digitIndex] = randomInRange(0, 9); // 0–9

  const chars = indices.map((idx) => DIGITS[idx]);

  const p1 = chars.slice(0, 6);
  const p2 = chars.slice(6, 12);
  const p3 = chars.slice(12, 18);

  return `${p1.join("")}-${p2.join("")}-${p3.join("")}`;
}