import DeviceDetect from "../../helpers/deviceDetect";
import classes from "./Card.module.scss";
import coddingImg0 from "../../img/programming1.jpg";
const coddingVideo = "https://manzaraz.github.io/DOM/assets/%20Manzi.mp4";

const Card = () => {
  return (
    <div className="card">
      <div className="card-top">
        <div className="card-browser"></div>
        <figure className="card-img-cnt">
          {DeviceDetect() === "Mobile" ? (
            <img src={coddingImg0} alt="Me programming" className="card-img" />
          ) : (
            <video
              src={coddingVideo}
              alt="Christian Programming"
              type="video/mp4"
              className="card-img"
              autoPlay
              loop
              muted
            />
          )}
        </figure>
      </div>
      <div></div>
      <div className="card-body">
        <div className="card-open"></div>
      </div>
      <div className="card-down"></div>
    </div>
  );
};

export default Card;
