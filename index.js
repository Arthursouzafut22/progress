"use strict";

const btnNext = document.querySelector(".btnNext");
const btnPrev = document.querySelector(".btnPrev");
const progress = document.querySelector(".containerProgres");

btnNext.addEventListener("click", () => {
  childrenContainer(0)
    ? elementSiblig(0)
    : childrenContainer(3)
    ? elementSiblig(3)
    : childrenContainer(6)
    ? elementSiblig(6)
    : childrenContainer(9)
    ? elementSiblig(9)
    : null;
});

const elementSiblig = (value) => {
  const element = progress.children[value].nextElementSibling;
  element.style.display = "none";
  return (element.nextElementSibling.style.display = "block");
};

const childrenContainer = (value) => {
  if (progress.children[value].value < progress.children[value].max) {
    return (progress.children[value].value += 50);
  }
};

const removeSibling = (value) => {
  const element = progress.children[value].nextElementSibling;
  element.style.display = "block";
  return (element.nextElementSibling.style.display = "none");
};

const removeChindrenContainer = (number) => {
  if (progress.children[number].value === progress.children[number].max) {
    return removeSibling(number);
  }
};

const childrenValue = (value) => {
  return (progress.children[value].value -= 50);
};

btnPrev.addEventListener("click", () => {
  removeChindrenContainer(9)
    ? childrenValue(9)
    : removeChindrenContainer(6)
    ? childrenValue(6)
    : removeChindrenContainer(3)
    ? childrenValue(3)
    : removeChindrenContainer(0)
    ? childrenValue(0)
    : null;
});
