const DIGITS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomInRange(start: number, end: number): number {
  return Math.floor(Math.random() * (end - start + 1) + start);
}

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
