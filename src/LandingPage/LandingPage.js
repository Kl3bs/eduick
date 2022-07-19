import styles from "./LandingPage.module.css";

function LandingPage() {
  const assetsPath = process.env.PUBLIC_URL + "/assets/";

  return (
    <div className="container">
      <div className={`row ${styles.row}`}>
        {/*margin top de 20px */}
        <div className="col-6">
          <img
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
                <input type="radio" id="2" value="2" name="fav_language" />
                <label className={styles.checkLabel} htmlFor="2">
                  {" "}
                  I'M TEACHER
                </label>
              </div>
            </div>

            <div className="col-3 pi-0">
              <div className={styles.check}>
                <input type="radio" id="1" name="fav_language" />
                <label className={styles.checkLabel} htmlFor="1">
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
}

export default LandingPage;
