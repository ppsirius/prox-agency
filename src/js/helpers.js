export const getCircleRadius = () =>  {
  let windowDimentions = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  return Math.sqrt(
    Math.pow(windowDimentions.width, 2) + Math.pow(windowDimentions.height, 2)
  );
}