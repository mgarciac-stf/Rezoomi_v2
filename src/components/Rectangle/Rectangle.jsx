/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

export const Rectangle = ({ states, className }) => {
  const [state, dispatch] = useReducer(reducer, {
    states: states || "default",
  });

  return (
    <div
      className={`rectangle ${state.states} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    />
  );
};

function reducer(state, action) {
  if (state.states === "default") {
    switch (action) {
      case "click":
        return {
          states: "clicked",
        };
    }
  }

  if (state.states === "clicked") {
    switch (action) {
      case "click":
        return {
          states: "default",
        };
    }
  }

  return state;
}

Rectangle.propTypes = {
  states: PropTypes.oneOf(["clicked", "default"]),
};
