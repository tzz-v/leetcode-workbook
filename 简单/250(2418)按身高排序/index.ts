function sortPeople(names: string[], heights: number[]): string[] {
  return names
    .map((name, idx) => ({ name, height: heights[idx] }))
    .sort((a, b) => b.height - a.height)
    .map((item) => item.name);
}
