import styles from "./Courses.module.css";
import InfiniteScroll from "react-infinite-scroll-component";
import React, { useState, useEffect } from "react";

import { Icon } from "react-icons-kit";

import { star } from "react-icons-kit/fa/star";

const assetsPath = process.env.PUBLIC_URL + "/assets/";

function Courses() {
  const [courses, setCourses] = useState([]);

  const [noMore, setNoMore] = useState(true);

  const [page, setPage] = useState(2);

  useEffect(() => {
    const getCourses = async () => {
      const res = await fetch("http://localhost:3001/courses?_page=1&_limit=6");

      const data = await res.json();

      setCourses(data);
    };

    getCourses();
  }, []);

  function getRating(rating) {
    let arr = [];

    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        arr.push(
          <Icon
            key={i}
            style={{ color: "#FFC908", opacity: "0.5" }}
            icon={star}
            size={20}
          ></Icon>
        );
      } else {
        arr.push(
          <Icon
            key={i}
            style={{ color: "#C4C4C4", opacity: "0.5" }}
            icon={star}
            size={20}
          ></Icon>
        );
      }
    }

    return arr;
  }

  const fetchCourses = async () => {
    const res = await fetch(
      `http://localhost:3001/courses?_page=${page}&_limit=6`
    );

    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const coursesFromServer = await fetchCourses();

    setCourses([...courses, ...coursesFromServer]);

    coursesFromServer.length === 0 || coursesFromServer.length < 6
      ? setNoMore(false)
      : setNoMore(true);

    setPage(page + 1);
  };

  return (
    <div>
      <div className={`container`} style={{ marginTop: "", padding: "20px" }}>
        <InfiniteScroll
          dataLength={courses.length}
          next={fetchData}
          hasMore={noMore}
          loader={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img alt="img" src={`${assetsPath}images/moreIndicator.svg`} />
            </div>
          }
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>That's all folks!</b>
            </p>
          }
        >
          <section className={styles.cards}>
            {courses.map((course) => (
              <article key={course.id}>
                <div className={styles.cardContentWrapper}>
                  <div className={styles.imageWrapper}>
                    <img alt="img" src={course.image} />
                  </div>

                  <div className={styles.infoWrapper}>
                    <span>{getRating(course.rating)}</span>

                    <button>{course.lessonNumber} lessons</button>
                  </div>

                  <div className={styles.courseTitle}>
                    <p>{course.name}</p>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Courses;
