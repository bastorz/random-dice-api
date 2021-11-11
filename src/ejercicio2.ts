export const throwDices = (face: number): number => {
    return Math.ceil(Math.random() * (face + 1))
  }

  console.log(throwDices(2));
