import styles from "./LandingPage.module.css";
import React, { useState } from "react";

const assetsPath = process.env.PUBLIC_URL + "/assets/";

const LandingPage = () => {
  const [selected, setSelected] = useState();

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div className="container">
      <div className={styles.bgWrapper}>
        <img src={`${assetsPath}images/bgShape.svg`} alt="" srcset="" />
      </div>

      <div className={`row ${styles.row}`}>
        <div className="col-6">
          <img
            alt="img"
            className={styles.mainImage}
            src={`${assetsPath}images/mainImage.svg`}
          />
        </div>
        <div className="col-6 form">
          <h1 className={styles.title}>
            Find your <br />
            <span>BEST TEACHER</span>
          </h1>

          <p className={styles.description}>
            Whether you are a student trying to find your ideal private language
            teachers/tutors or a teacher trying to find great students for your
            customised private lessons!
          </p>

          <input
            type="text"
            placeholder="Type here what are you looking for"
            className={styles.searchInput}
          />

          <form className={styles.formCheck}>
            <div className="col-3 pi-0">
              <div className={styles.check}>
                <input
                  type="radio"
                  id="yes"
                  value="yes"
                  name="fav_language"
                  onChange={handleChange}
                  checked={selected === "yes"}
                />
                <label className={styles.checkLabel} htmlFor="2">
                  I'M TEACHER
                </label>
              </div>
            </div>

            <div className="col-3 pi-0">
              <div className={styles.check}>
                <input
                  type="radio"
                  id="no"
                  value="no"
                  name="fav_language"
                  onChange={handleChange}
                  checked={selected === "no"}
                />
                <label className={styles.checkLabel} htmlFor={1}>
                  {" "}
                  I'M STUDENT
                </label>
              </div>
            </div>

            <div className="col-3 pi-0">
              <button className="yellowButton">SEARCH</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
