import "./index.scss";

const Artist = (props) => {
  return (
    <div className="artist">
      <img src={props.img}/>
      <div className="user-info">
        <div className="profile">
          <img src={props.profile_img}/>
          {props.verified &&
            <div className="verified"></div>
          }
        </div>
        <div className="user-name">
          {props.name}
        </div>
        {props.bookmarked &&
          <img className="ic-bookmark" src="./assets/images/ic_bookmark.svg"/>
        }
        <a className="btn-follow">FOLLOW +</a>
      </div>
    </div>
  );
};

export default Artist;
