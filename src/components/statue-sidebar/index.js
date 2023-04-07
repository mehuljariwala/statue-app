import React from "react";
import csx from "classnames";
import IconHeart from "../../icons/icon-heart";
import IconEye from "../../icons/icon-eye";
import IconShare from "../../icons/icon-share";
import IconRightArrow from "../../icons/icons-right-arrow";
import "./statue-sidebar.scss";
import IconArrowLeft from "../../icons/icon-arrow-left";
import IconArrowLeftForward from "../../icons/icon-arrow-left-forward";

export const StatusSidebar = ({ toggleSidbar, onHandleSidebar }) => {
  const content = {
    heading: "MAITREYA BUDDHA IN GESTURE OF FEARLESSNESS (ABHAYA MUDRA)",
    detailsInfo: [
      {
        label: "Dynasty",
        desc: "Ahichchhatra",
      },
      {
        label: "Period",
        desc: "200 CE",
      },
      {
        label: "Material",
        desc: "Sandstone",
      },
      {
        label: "Location",
        desc: "National Museum",
      },
    ],
    history: `Maitreya, the future Buddha to be, resides in the Tushita heaven as a bodhisattva waiting to humanitv. In Buddhism. Maitreva is the eighth Buddha, a successor of the seven historical Buddhas (santa-manushi Buddhas). The Digha Nikaya mentions. Maitreva Buddha will be born in Ketumati in present-day Varanasi, Uttar Pradesh. As a bodhisattva. Maitreva wears a heavilv adorned with earrings. wristlets. necklaces, and an amulet. The`,
  };

  const renderContent = () => {
    return (
      <div style={{ opacity: toggleSidbar ? 1 : 0 }}>
        <div style={{ display: toggleSidbar ? "block" : "none" }}>
          <div className="top-left-arrow">
            <IconArrowLeft />
          </div>
          <h1 className="heading">{content.heading}</h1>
          <section className="icon-container">
            <div className="icon-wrapper">
              <div className="icon">
                <IconHeart />
              </div>
              <div className="total">0</div>
            </div>
            <div className="icon-wrapper">
              <div className="icon">
                <IconEye />
              </div>
              <div className="total">120</div>
            </div>
            <div className="icon-wrapper">
              <div className="icon">
                <IconShare />
              </div>
              <div className="total">27</div>
            </div>
          </section>

          <section className="info-container">
            {content.detailsInfo.map((list, index) => (
              <div className="info-row" key={index}>
                <div>{list.label}</div>:<div>{list.desc}</div>
              </div>
            ))}
          </section>

          <section className="history-container">
            <h2 className="h-heading">Description:</h2>
            <p className="h-description">{content.history}</p>
          </section>

          <section className="read-more-container">
            <a href="www.google.com" className="read-more-link">
              <IconRightArrow />
              <span>Read More</span>
            </a>
          </section>

          <section className="footer-action">
            <button className="primary-btn">ADD TO COLLECTION</button>
            <button className="secondary-btn">SOUVENIR</button>
          </section>
        </div>
      </div>
    );
  };

  return (
    <div
      className={csx("status-sidebar-container", {
        "status-sidebar-show": toggleSidbar,
      })}
    >
      <div
        className={csx("sidebar-toggle", {
          "sidebar-toggle-close": !toggleSidbar,
        })}
        onClick={onHandleSidebar}
      >
        <IconArrowLeftForward
          style={{
            transition: "all 0.2s ease 0s",
            transform: toggleSidbar ? "rotate(360deg)" : "rotate(180deg)",
          }}
        />
      </div>

      {renderContent()}
    </div>
  );
};
