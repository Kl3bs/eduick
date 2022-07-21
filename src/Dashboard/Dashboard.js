import React from "react";
import Banner from "./components/Banner/Banner";
import Courses from "./components/Courses/Courses";
import DashboardNavbar from "./components/Navbar/DashboardNavbar";

import styles from "./Dashboard.module.css";

function Dashboard() {
  return (
    <div className={styles.contentWrapper}>
      <DashboardNavbar />
      <Banner />
      <Courses />
    </div>
  );
}

export default Dashboard;
