function countingSheep(arrayOfSheep: (boolean | undefined | null)[]): number {
  let totalSheeps = 0;
  arrayOfSheep.forEach((sheep: boolean | undefined | null) => {
    if (sheep === true) {
      totalSheeps++;
    }
  });
  return totalSheeps;
}

export default countingSheep;
