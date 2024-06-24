import ReactPlayer from "react-player";

const Boginoo = () => {
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
          Boginoo Url Shorten Website
        </h1>
      </div>
      <ReactPlayer
        muted="false"
        loop="true"
        width={1300}
        height={700}
        url="https://youtu.be/-UwfxSyBvg4"
      />
    </div>
  );
};
export default Boginoo;
