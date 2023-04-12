import "./index.scss";

const Header = () => {
  return (
    <div className="header">
      <a href="/">
        <img className="logo" src="./assets/images/img_logo.svg"/>
      </a>

      <div className="header-content">
        <div className="header-buttons">
          <a className="btn-produce">
            <img src="./assets/images/btn_produce.png"/>
          </a>
          <a className="btn-generate">
            <img src="./assets/images/btn_generate.png"/>
          </a>
        </div>

        <div className="header-menu">
          <a>HOME</a>
          <a>EXPLORE</a>
          <a>RANKINGS</a>
          <a>FOLLOWING</a>
        </div>

        <div className="header-profile">
          <a className="btn-search">
            <img src="./assets/images/ic_search.svg"/>
          </a>
          <a className="btn-cart">
            <img src="./assets/images/ic_cart.svg"/>
            <span>0</span>
          </a>
          <a className="btn-profile">
            <span></span>
          </a>
        </div>
      </div>
    </div>
  )
};

export default Header;
