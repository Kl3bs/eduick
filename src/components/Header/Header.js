import styles from "./Header.module.css";
import { useState, useRef } from "react";

import Modal from "react-modal";
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
          <div className="col-6">
            <p className={styles.modalTitle}>
              Get Started <br /> <span>JUST LOGIN</span>{" "}
            </p>
          </div>
          <div className="col-1">
            <span onClick={closeModal} className={styles.modalClose}></span>
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
