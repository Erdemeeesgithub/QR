import profile from "../assets/1709957176648.jpg";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.all}>
      <div>
        <div style={{ paddingTop: 50 }}>
          <img src={profile} style={{ borderRadius: "50%", width: 200 }}></img>
        </div>
        <div>
          <h1
            style={{
              color: "white",
              position: "absolute",
              top: 250,
              left: 750,
              fontSize: 30,
              fontFamily: "Arial Black",
            }}
          >
            Erdemdelgerekh Battogtokh
          </h1>
        </div>
        <div
          style={{
            color: "black",
            position: "absolute",
            top: 300,
            left: 780,
            fontSize: 30,
            fontFamily: "impact",
          }}
        >
          Intended School: NYU Shanghai
        </div>
        <div
          style={{
            color: "black",
            position: "absolute",
            top: 350,
            left: 780,
            fontSize: 30,
            fontFamily: "impact",
          }}
        >
          Intended Major: Computer Science
        </div>
      </div>
      <div>
        <div>
          <div
            style={{
              position: "absolute",
              top: 400,
              left: 300,
              fontFamily: "impact",
            }}
            className={styles.button}
          >
            <Link to="/boginoo" className={styles.link}>
              Boginoo Url Shorten Website
            </Link>
          </div>
          <div
            style={{
              position: "absolute",
              top: 530,
              left: 300,
              fontFamily: "impact",
            }}
            className={styles.button}
          >
            <Link to="/landingpp" className={styles.link}>
              Landing Page Design Copy
            </Link>
          </div>
          <div
            style={{
              position: "absolute",
              top: 660,
              left: 300,
              fontFamily: "impact",
            }}
            className={styles.button}
          >
            <Link to="/spotify" className={styles.link}>
              Music listening user website
            </Link>
          </div>
          <div
            style={{
              position: "absolute",
              top: 790,
              left: 300,
              fontFamily: "impact",
            }}
            className={styles.button}
          >
            <Link to="/flip" className={styles.link}>
              Flip game test
            </Link>
          </div>
        </div>
        <div>
          <div
            style={{
              position: "absolute",
              top: 400,
              left: 1100,
              fontFamily: "impact",
            }}
            className={styles.button}
          >
            <Link to="/snake" className={styles.link}>
              Snake apple eating game typescript
            </Link>
          </div>
          <div
            style={{
              position: "absolute",
              top: 530,
              left: 1100,
              fontFamily: "impact",
            }}
            className={styles.button}
          >
            <Link to="/vlog" className={styles.link}>
              Vlog Website using data nextJS
            </Link>
          </div>
          <div
            style={{
              position: "absolute",
              top: 660,
              left: 1100,
              fontFamily: "impact",
            }}
            className={styles.button}
          >
            <Link to="/weather" className={styles.link}>
              Weather website using data
            </Link>
          </div>
          <div
            style={{
              position: "absolute",
              top: 790,
              left: 1100,
              fontFamily: "impact",
            }}
            className={styles.button}
          >
            <Link to="/country" className={styles.link}>
              Country website using data
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
