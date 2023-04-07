import React from "react";
import csx from "classnames";
import statueImg from "../../assets/statue-img.png";
import "./statue-image.scss";

export const StatusImage = ({ toggleSidbar, isSmallScreen }) => {
  const isMobileSidebarOpen = isSmallScreen && toggleSidbar;
  return (
    <div
      className={csx("status-image-container", {
        "status-image-hide": isMobileSidebarOpen,
      })}
    >
      <div
        className={csx("background-container", {
          "full-background-container": !toggleSidbar,
        })}
      >
        <img className="status-image" src={statueImg} alt="Statue" />
      </div>
    </div>
  );
};
