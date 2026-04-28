import '../home/dashboardWidgets.css';

import { TOP_CONDITIONS_DATA as conditions } from '../../utils/dummyData';
const TopConditions = () => {
  return (
    <div className="widget-card top-conditions">
      <h3 className="widget-title">Top Conditions</h3>
      <div className="conditions-list">
        {conditions.map(cond => (
          <div key={cond.name} className="condition-item">
            <div className="condition-header">
              <span className="condition-name">{cond.name}</span>
              <span className="condition-value">{cond.value}%</span>
            </div>
            <div className="condition-bar-bg">
              <div className="condition-bar-fill" style={{ width: `${cond.value}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopConditions;
