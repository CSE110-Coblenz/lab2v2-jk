import { describe, it, expect } from "vitest";
import { guests } from "./guests";

describe("guests", () => {
  it("should have at least 5 guests", () => {
    expect(guests.length).toBeGreaterThanOrEqual(5);
  });

  it("should include 'Alice Johnson'", () => {
    expect(guests).toContain("Alice Johnson");
  });

  it("should have unique guest names", () => {
    const uniqueGuests = new Set(guests);
    expect(uniqueGuests.size).toBe(guests.length);
  });
});
