import ReactPlayer from "react-player";

const Flip = () => {
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
          Flip game test
        </h1>
      </div>
      <ReactPlayer
        muted="false"
        loop="true"
        width={1300}
        height={700}
        url="https://youtu.be/jFyNsos_A6Q"
      />
    </div>
  );
};
export default Flip;
