import React from 'react';
import { Card } from 'react-bootstrap';
import { proxyQueueData } from '../../data/mockData';

const ProxyQueue = () => {
  const queueItems = proxyQueueData;
    return (
    <Card className="card-dark fade-in card-gradient">
      <Card.Body>
        <h6 className="section-header">PROXY QUEUE</h6>
        
        {/* Clip C with progress bar */}
        <div className="list-item">
          <div className="flex-grow-1">
            <div className="d-flex align-items-center">
              <span className="status-indicator status-yellow"></span>
              <div className="list-item-title">{queueItems[0].name}</div>
            </div>            <div className="progress-custom">
              <div className="progress-bar-custom gradient-bg-yellow" style={{ width: `${queueItems[0].progress}%` }}></div>
            </div>
          </div>
          <div className="list-item-meta">{queueItems[0].progress} % ({queueItems[0].resolution})</div>
        </div>
        
        {/* Clip D with progress bar */}
        <div className="list-item">
          <div className="flex-grow-1">
            <div className="d-flex align-items-center">
              <span className="status-indicator status-green"></span>
              <div className="list-item-title">{queueItems[1].name}</div>
            </div>            <div className="progress-custom">
              <div className="progress-bar-custom gradient-bg-green" style={{ width: `${queueItems[1].progress}%` }}></div>
            </div>
          </div>
          <div className="list-item-meta">{queueItems[1].progress} % ({queueItems[1].resolution})</div>
        </div>
        
        {/* News Segment with progress bar */}
        <div className="list-item">
          <div className="flex-grow-1">
            <div className="d-flex align-items-center">
              <span className="status-indicator status-red"></span>
              <div className="list-item-title">{queueItems[2].name}</div>
            </div>            <div className="progress-custom">
              <div className="progress-bar-custom gradient-bg-red" style={{ width: `${queueItems[2].progress}%` }}></div>
            </div>
          </div>
          <div className="list-item-meta">{queueItems[2].progress} % ({queueItems[2].resolution})</div>
        </div>
          {/* View All link */}
        <div className="text-end mt-3">
          <button onClick={() => {}} className="view-all-link btn btn-link p-0">VIEW ALL</button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProxyQueue;