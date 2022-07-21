import React, { useState } from "react";

import styles from "./DashboardNavbar.module.css";

import { Icon } from "react-icons-kit";
import { chevronDown } from "react-icons-kit/fa/chevronDown";
import { chevronUp } from "react-icons-kit/fa/chevronUp";
import { arrowRight2 } from "react-icons-kit/icomoon/arrowRight2";

const body = document.querySelector("body");

function DashboardNavbar() {
  const assetsPath = process.env.PUBLIC_URL + "/assets/";

  const responsiveMenu = styles.active;

  const [icon, setIcon] = useState(chevronDown);

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);

    if (navbarOpen === false) {
      setIcon(chevronUp);
      body.style.touchAction = "none";
      body.style.overflow = "hidden";
      body.scroll = "no";
    } else {
      setIcon(chevronDown);
      body.style.touchAction = "initial";
      body.style.overflow = "initial";
      body.scroll = "yes";
    }

    console.log(navbarOpen);
  };

  return (
    <div className={styles.containerWrapper}>
      <div className="container">
        <header>
          <div style={{ padding: "10px" }}>
            <a href="/" className={styles.logo}>
              <img src={`${assetsPath}images/logo.svg`} alt="Logo Eduick" />
            </a>
            <div className={styles.buttonsWrapper}>
              <div
                onClick={handleToggle}
                className={`${styles.meanToggle} ${navbarOpen ? "active" : ""}`}
              >
                <Icon style={{ color: "#2E3A59" }} icon={icon} size={15}></Icon>
              </div>
              <div className={styles.avatarWrapper}>
                <div className={styles.dotStatus}></div>
                <div className={styles.avatar}></div>
              </div>
            </div>
          </div>

          <nav
            className={`${navbarOpen ? responsiveMenu : ""} ${styles.mainNav}`}
          >
            <div className={styles.teacherMode}>
              <p>CHANGE TO TEACHER MODE</p>

              <span>
                <Icon
                  style={{ color: "#2E3A59", opacity: "0.5" }}
                  icon={arrowRight2}
                  size={25}
                ></Icon>
              </span>

              <div className={styles.teacherModeOverlay}></div>
            </div>

            <ul>
              <li>
                <a href="/">My Classes</a>
              </li>
            </ul>
          </nav>
          <div className={styles.clear}></div>
        </header>
      </div>
    </div>
  );
}

export default DashboardNavbar;
