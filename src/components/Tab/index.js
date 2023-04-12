import './index.scss';

const Tab = (props) => {
  const tabNameList = props.tabNameList;

  return (
    <div className="tab">
      <div className="tab-header">
        {tabNameList.map((tabName, key) =>
          <a className="btn-tab" key={key}>tabName</a>
        )}
      </div>
      <div className="tab-content">
        
      </div>
    </div>
  );
}

export default Tab;
