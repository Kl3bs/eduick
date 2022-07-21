import BannerStyle from "../Banner/Banner.module.css";
import styles from "./Courses.module.css";

const assetsPath = process.env.PUBLIC_URL + "/assets/";

function Courses() {
  return (
    <div className={`container`} style={{ marginTop: "30px" }}>
      <div
        className={`${styles.col3} col-3`}
        style={{ height: "auto", background: "white", marginLeft: "65px" }}
      >
        <div className={styles.imageWrapper}>
          <img alt="img" src={`${assetsPath}images/class.png`} />
        </div>

        <div className={styles.infoWrapper}>
          <p>X X X X X</p>
          <button>10 lessons</button>
        </div>

        <div className={styles.courseTitle}>
          <p>Master English: Improve Your Speaking</p>
        </div>
      </div>
    </div>
  );
}

export default Courses;
