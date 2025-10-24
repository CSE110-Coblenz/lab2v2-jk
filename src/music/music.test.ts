import { describe, it, expect } from "vitest";
import { musicList } from "./list";

describe("music", () => {
  it("should have at least 5 songs", () => {
    expect(musicList.length).toBeGreaterThanOrEqual(5);
  });

  it("should include 'Bohemian Rhapsody - Queen'", () => {
    expect(musicList).toContain("Bohemian Rhapsody - Queen");
  });

  it("should have unique song titles", () => {
    const uniqueSongs = new Set(musicList);
    expect(uniqueSongs.size).toBe(musicList.length);
  });
});
