import styles from "./Header.module.css";
import { useState, useRef } from "react";

import Modal from "react-modal";
import LoginForm from "../LoginForm/LoginForm";

Modal.setAppElement("#root");

function Header() {
  const assetsPath = process.env.PUBLIC_URL + "/assets/";

  const input_ref = useRef(null);
  const menu_ref = useRef(null);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    console.log(modalIsOpen);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const updateMenu = () => {
    const input = document.getElementById("responsive-menu");
    const menu = document.getElementById("menu");

    if (input.checked) {
      menu.style.background = "#200e64";
    } else {
      menu.style.background = "#7a57fd";
    }
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={styles.Modal}
        overlayClassName={styles.Overlay}
      >
        <div className={`${styles.modalRow} row`}>
          <div className={`${styles.p6} col-6`}>
            <p className={styles.modalTitle}>
              Get Started <br /> <span>JUST LOGIN</span>{" "}
            </p>

            <LoginForm />
          </div>
          <div className="col-1">
            <span onClick={closeModal} className={styles.modalClose}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="white"
                />
              </svg>
            </span>
          </div>
        </div>
      </Modal>

      <div className={styles.navbarWrapper}>
        <nav className={styles.menu} ref={menu_ref} id="menu">
          <input
            ref={input_ref}
            type="checkbox"
            id="responsive-menu"
            onClick={updateMenu}
          />
          <label></label>

          <img
            className="logo"
            src={`${assetsPath}images/logo.svg`}
            alt="Logo Eduick"
          />
          <ul>
            <li>
              <a href="http://">How it Works</a>
            </li>
            <li>
              <a href="http://">About Us</a>
            </li>
            <li onClick={openModal}>
              <button type="button" className="yellowButton">
                Get Started
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
