import React from "react";

export const Display = props => {
  const value = props.state && props.state.value ? props.state.value : "";

  return <section className="flex-child">{value}</section>;
};

export default Display;
