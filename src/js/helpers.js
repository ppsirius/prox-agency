const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

export const getCircleRadius = () => {
  let windowDimentions = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  return Math.sqrt(
    Math.pow(windowDimentions.width, 2) + Math.pow(windowDimentions.height, 2)
  );
};

export const setSvgCirclePosition = (buttonElement, svgElement) => {
  let button = document.querySelector(buttonElement).getBoundingClientRect(),
    svgIcon = document.querySelector(svgElement),
    circleBg = svgIcon.querySelector("circle"),
    positionX = button.left + button.width / 2,
    positionY = button.top + button.height / 2;

  svgIcon.setAttribute("viewBox", `0 0 ${windowWidth} ${windowHeight}`);
  circleBg.setAttribute('cx', positionX);
  circleBg.setAttribute('cy', positionY)
};
