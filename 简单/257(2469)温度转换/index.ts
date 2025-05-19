function convertTemperature(celsius: number): number[] {
  return [celsius + 273.15, Math.floor(celsius * 180) / 100 + 32];
}
