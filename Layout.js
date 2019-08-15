import React from "react";

export default ({ children, ...rest }) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      ...rest
    }}
  >
    {children}
  </div>
);
