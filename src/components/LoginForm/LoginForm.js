import { useState } from "react";
import { Icon } from "react-icons-kit";
import { Link } from "react-router-dom";

import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

import styles from "./LoginForm.module.css";

function LoginForm() {
  const [type, setType] = useState("text");
  const [icon, setIcon] = useState(eye);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  return (
    <div className="container">
      <div className={`${styles.formRow} row`}>
        <label className={styles.inputLabel}>Username:</label>

        <div className={styles.inputWrapper}>
          <input className={styles.input} type="text"></input>
        </div>
      </div>

      <div className={`${styles.formRow} row`}>
        <label className={styles.inputLabel}>Password:</label>

        <div className={styles.inputWrapper}>
          <input className={styles.input} type={type}></input>
          <span onClick={handleToggle} className={styles.showHideIcon}>
            <Icon style={{ color: "#fff" }} icon={icon} size={25}></Icon>
          </span>
        </div>
      </div>

      <Link to="/dashboard">
        {" "}
        <button className={`${styles.formButton} yellowButton`}>LOGIN</button>
      </Link>
    </div>
  );
}

export default LoginForm;
