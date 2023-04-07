import React, { useEffect, useState } from "react";
import { StatusImage } from "../statue-image";
import { StatusSidebar } from "../statue-sidebar";
import "./statue-details.scss";

export const StatueDetails = () => {
  const [toggleSidbar, setToggleSidebar] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const updateScreen = (event) => {
    setIsSmallScreen(event.matches);
    setToggleSidebar(!event.matches);
  };

  useEffect(() => {
    const mql = window.matchMedia("screen and (max-width: 1100px)");

    updateScreen(mql);

    mql.addEventListener("change", updateScreen);

    return () => {
      mql.removeEventListener("change", updateScreen);
    };
  }, []);

  const onHandleSidebar = () => {
    setToggleSidebar((prev) => !prev);
  };

  return (
    <div className="status-details-container">
      <StatusSidebar
        toggleSidbar={toggleSidbar}
        onHandleSidebar={onHandleSidebar}
      />
      <StatusImage
        toggleSidbar={toggleSidbar}
        setToggleSidebar={setToggleSidebar}
        isSmallScreen={isSmallScreen}
      />
    </div>
  );
};
