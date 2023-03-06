import "./index.scss";

const Artist = (props) => {
  return (
    <div className="artist">
      <img src={props.src}/>
      <div className="user-info">
        <div className="profile">
          <img/>
          {props.verified &&
            <div className="verified"></div>
          }
        </div>
        <div className="user-name">
          {props.name}
        </div>
        <a className="btn-follow">FOLLOW +</a>
      </div>
    </div>
  );
};

export default Artist;
