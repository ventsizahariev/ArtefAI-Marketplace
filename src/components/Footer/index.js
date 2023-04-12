import './index.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <img src="./assets/images/img_logo_footer.svg"/>
        <div className="footer-buttons">
          <a className="btn">Profile</a>
          <a className="btn">My Collections</a>
          <a className="btn">My Activity</a>
          <a className="btn">Following</a>
          <a className="btn">Saved</a>
          <a className="btn">Settings</a>
          <a className="btn">Language</a>
          <a className="btn">Terms of use</a>
          <a className="btn">Privacy Policy</a>
          <a className="btn">FAQ</a>
        </div>
        <div className="footer-social">
          <a className="btn-dark-mode"></a>
          <a className="btn-facebook"></a>
          <a className="btn-instagram"></a>
          <a className="btn-twitter"></a>
          <a className="btn-discord"></a>
        </div>
      </div>
      <div className="copyright">
        <div>
          © ArtefAi All Rights Reserved
        </div>
        <div>
          info@artefai.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
