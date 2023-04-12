import './index.scss';

const Menu = () => {
  return (
    <div className="menu">
      <ul>
        <li>
          <a className="btn-notice"></a>
          <a className="btn-profile">
            <img/>
          </a>
        </li>
        <li>
          <a className="btn-metamask-wallet">
            <label>
              MetaMask Wallet
              <span>0x23123423</span>
            </label>
          </a>
          <a className="btn-copy"></a>
        </li>
        <li>
          <a className="btn-menu-profile">
            Profile
          </a>
        </li>
        <li>
          <a className="btn-menu-collections">
            My Collections
          </a>
        </li>
        <li>
          <a className="btn-menu-activity">
            My Activity
          </a>
        </li>
        <li>
          <a className="btn-menu-following">
            Following
          </a>
        </li>
        <li>
          <a className="btn-menu-saved">
            Saved
          </a>
        </li>
        <li>
          <a className="btn-menu-settings">
            Settings
          </a>
        </li>
        <li>
          <a className="btn-menu-language">
            Language
          </a>
        </li>
        <li>
          <a className="btn-menu-darkmode">
            Dark Mode
          </a>
        </li>
        <a className="btn-logout">Log Out</a>
      </ul>
    </div>
  );
};

export default Menu;
