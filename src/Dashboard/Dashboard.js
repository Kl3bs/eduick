import React, { useState } from "react";

import styles from "./Dashboard.module.css";

function Dashboard() {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);

    console.log(navbarOpen);
  };

  const responsiveMenu = styles.active;

  return (
    <div className="container">
      <header>
        <a href="google.com" className={styles.logo}>
          Logo
        </a>

        <div className={styles.buttonsWrapper}>
          <div
            onClick={handleToggle}
            className={`${styles.meanToggle} ${navbarOpen ? "active" : ""}`}
          ></div>
          <div className={styles.avatar}></div>
        </div>
        <nav className={`${navbarOpen ? responsiveMenu : ""}`}>
          <ul>
            <li>
              <a href="google.com">Home</a>
            </li>
          </ul>
        </nav>
        <div className={styles.clear}></div>
      </header>
    </div>
  );
}

export default Dashboard;
