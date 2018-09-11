import React from "react";

export default ({ src, children }) => (
  <div className="relative">
    <img src={src} alt="Крапивный суп" width="100%" />
    <p className="absolute">{children}</p>
  </div>
);
