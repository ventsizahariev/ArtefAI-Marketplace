import "./index.scss";

const TrendingNFT = (props) => {
  return (
    <div className="trending-nft">
      <div className="nft-cnt">
        <div className="forward-cnt">
          <span>{props.forward_cnt}</span>
          <a className="btn-forward"></a>
        </div>
        <div className="follow-cnt">
          <span>{props.follow_cnt}</span>
          <a className="btn-follow"></a>
        </div>
      </div>

      <div className="nft-info">
        <img src={props.img}/>
        <div className="user-info">
          <div className="profile">
            <img src={props.profile_img}/>
            {props.verified &&
              <div className="verified"></div>
            }
          </div>
          <div className="user-name">
            <span>{props.name}</span>
            {props.nickname}
          </div>
          {props.bookmarked &&
            <img className="ic-bookmark" src="./assets/images/ic_bookmark.svg"/>
          }
          <a className="btn-follow">FOLLOW +</a>
        </div>
      </div>

      <div className="nft-price">
        <div>
          <div className="label">Highest Offer</div>
          <div className="value">{props.highest_offer} ETH</div>
        </div>

        <div>
          <div className="label">Price</div>
          <div className="value">{props.price} ETH</div>
        </div>
      </div>
    </div>
  )
}

export default TrendingNFT;
