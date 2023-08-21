export const getRandomDarkColor = () => {
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);
    const darkColor = `rgb(${red}, ${green}, ${blue})`;
    return darkColor;
  };