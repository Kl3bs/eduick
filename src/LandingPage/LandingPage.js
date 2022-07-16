import styles from "./LandingPage.module.css";

function LandingPage() {
  const assetsPath = process.env.PUBLIC_URL + "/assets/";

  return (
    <>
      <div className={styles.containerFluid}>
        <div className="container p-4">
          <div className="row ">
            <div className={`${styles.col} col-sm-6`}>
              {/* <img
                className={styles.mainImage}
                src={`${assetsPath}images/img.png`}
              ></img> */}
            </div>
            <div className={`${styles.col}  col-sm-6`}>
              <h1 className={styles.title}>
                Find your <br></br> <span>BEST TEACHER</span>{" "}
              </h1>
              <input
                placeholder="Type here what are you looking for"
                type={"text"}
                className={styles.searchInput}
              ></input>

              <div className="row justify-content-evenly mt-4">
                <div className="col-5 bg-dark">XXXXX</div>
                <div className="col-5 bg-light">XXXXX</div>
                <div className="col-sm-6 bg-danger mt-4">XXXXX</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}></div>{" "}
    </>
  );
}

export default LandingPage;
