function corpFlightBookings(bookings: number[][], n: number): number[] {
  const arr = new Array(n + 2).fill(0);
  bookings.forEach(([first, last, seats]) => {
      arr[first] += seats;
      arr[last + 1] -= seats;
  });
  for (let i = 2; i < arr.length - 1; i++) {
      arr[i] += arr[i - 1];
  };
  return arr.slice(1, -1)
};