import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const Weather = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 30,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1
          style={{
            color: "white",
            backgroundColor: "black",
            padding: 30,
            borderRadius: 50,
          }}
        >
          Weather website using data
        </h1>
      </div>
      <ReactPlayer
        muted="false"
        loop="true"
        width={1300}
        height={700}
        url="https://youtu.be/NBJALXQj_K0"
      />
    </div>
  );
};
export default Weather;
