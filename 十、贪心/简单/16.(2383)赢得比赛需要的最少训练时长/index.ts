function minNumberOfHours(
  initialEnergy: number,
  initialExperience: number,
  energy: number[],
  experience: number[]
): number {
  let res = 0;
  energy.forEach((item, i) => {
    initialEnergy -= item;
    if (initialEnergy < 1) {
      res += Math.abs(initialEnergy) + 1;
      initialEnergy = 1;
    }

    const residualExperience = initialExperience - experience[i];
    if (residualExperience < 1) {
      res += Math.abs(residualExperience) + 1;
      initialExperience += Math.abs(residualExperience) + 1;
    }
    initialExperience += experience[i];
  });
  return res;
}
