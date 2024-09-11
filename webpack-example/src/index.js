import { join } from "lodash-es";
const component = () => {
  const element = document.createElement("div");
  element.innerHTML = join(["hello", "webpack!"], ",");

  console.log("source map test");
  return element;
};

document.body.appendChild(component());
