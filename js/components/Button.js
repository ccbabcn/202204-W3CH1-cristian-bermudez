import Component from "./Component.js";

class Button extends Component {
  action;

  constructor(parentElement, className, text, action) {
    super(parentElement, "button", className);
    this.element.textContent = text;
    this.action = action;
    this.myListener();
  }

  myListener() {
    this.element.addEventListener("click", this.action);
  }
}

export default Button;
