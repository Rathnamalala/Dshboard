import React from 'react';
import Header from './Header';
import InputMonitor from '../dashboard/InputMonitor';
import ActiveRecordings from '../dashboard/ActiveRecordings';
import ActiveRecordingLive from '../dashboard/ActiveRecordingLive';
import IngestSchedule from '../dashboard/IngestSchedule';
import IngestHistory from '../dashboard/IngestHistory';
import ProxyQueue from '../dashboard/ProxyQueue';
import ActiveRecordingSimple from '../dashboard/ActiveRecordingSimple';

const MainLayout = () => {
  return (
    <div className="bg-dark-custom min-vh-100">
      <Header />
      <div className="dashboard-container">
        {/* Input Monitor - Full Width */}
        <div className="input-monitor-section">
          <InputMonitor />
        </div>
        
        {/* Bottom Three Column Layout */}
        <div className="bottom-three-columns">
          {/* Column 1: Active Recordings with Schedule and History below */}
          <div className="left-column-stack">
            <ActiveRecordings />
            <IngestSchedule />
            <IngestHistory />
          </div>          {/* Column 2: Active Recording Live plus additional recordings */}
          <div className="middle-column-stack">
            <ActiveRecordingLive />
            <ActiveRecordingSimple index={0} />
            <ActiveRecordingSimple index={1} />
          </div>
          
          {/* Column 3: Proxy Queue plus additional recordings */}
          <div className="right-column-stack">
            <ProxyQueue />
            <ActiveRecordingSimple index={2} />
            <ActiveRecordingSimple index={3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;