import styles from "./Header.module.css";

function Header() {
  const assetsPath = process.env.PUBLIC_URL + "/assets/";

  return (
    <div className={styles.headerWrapper}>
      <div className={`container`}>
        <nav className={`navbar navbar-expand-lg ${styles.navbarHeight} `}>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand mt-2" href="google.com">
            <img
              width={139.28}
              height={23}
              src={`${assetsPath}images/logo.svg`}
              className="d-inline-block align-top"
              alt=""
            ></img>
          </a>

          <div
            className={`navbar-collapse justify-content-between ${styles.collapse}`}
            id="navbarNav"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a
                  className={`nav-link text-white ${styles.textWhite}`}
                  href="google.com"
                >
                  How it works
                </a>
              </li>
              <li className={`nav-item ${styles.navItem}`}>
                <a
                  className={`nav-link text-white ${styles.textWhite}`}
                  href="google.com"
                >
                  About Us
                </a>
              </li>
            </ul>

            <button className={` ${styles.yellowButton}`}>Get Started</button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
