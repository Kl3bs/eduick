import styles from "./Banner.module.css";

const assetsPath = process.env.PUBLIC_URL + "/assets/";

function Banner() {
  return (
    <div className={styles.container}>
      <div className={styles.bannerWrapper}>
        <div className="row" style={{ height: "100%" }}>
          <div className={`col-2  ${styles.col2}`}>
            <img
              alt="img"
              className={styles.bannerDetail}
              src={`${assetsPath}images/bannerDetail.svg`}
            />
          </div>
          <div className="col-6">
            <p className={styles.bannerTitle}>
              Hello{" "}
              <span>
                Student<b>.</b>
              </span>
            </p>

            <p className={styles.bannerMessage}>
              Whether you are a student trying to find your ideal private
              language teachers/tutors
            </p>
          </div>
          <div className={`${styles.col6} col-6`}>
            <img
              alt="img"
              className={styles.mainImage}
              src={`${assetsPath}images/meeting.svg`}
            />
          </div>

          <div className={`${styles.col1} col-1`}>
            <img
              alt="img"
              className={styles.bannerDetail}
              src={`${assetsPath}images/bannerDetail.svg`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
