import React from "react";
import "../../ui/styles/Button.scss";

const Button = props => {
  return (
    <button type="button" className="button" {...props}>
      {props.text}
    </button>
  );
};
Button.defaultProps = {
  name: "Button"
};

export default Button;
