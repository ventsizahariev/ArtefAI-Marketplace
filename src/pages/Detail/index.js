import './index.scss';

const Detail = () => {
  return (
    <div className="page page-detail">
      <div className="nft">
        <div className="nft-image">
          <img/>
          <div className="nft-cnt">
            <div className="forward-cnt">
              <span>10</span>
              <a className="btn-forward"></a>
            </div>
            <div className="follow-cnt">
              <span>20</span>
              <a className="btn-follow"></a>
            </div>
          </div>
        </div>

        <div className="nft-info">
          <div className="user-info">
            <img/>
            <a className="user-name">
              <span>Robotica</span>
              SPACE #4
            </a>
            <a className="btn-following"></a>
          </div>

          <div className="details">
            Details

            <dl>
              <dt>Contract Address</dt>
              <dd>0xa41a...9262</dd>
              <dt>Token ID</dt>
              <dd>4</dd>
              <dt>Token Standard</dt>
              <dd>ERC-721</dd>
              <dt>Chain</dt>
              <dd>Ethereum</dd>
            </dl>
          </div>

          <div className=""></div>
        </div>
      </div>

      <div className="nft-history">
        <div className="nav-header">

        </div>
      </div>
    </div>
  );
};

export default Detail;
