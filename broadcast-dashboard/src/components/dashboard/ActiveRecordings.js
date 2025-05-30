import React from 'react';
import { Card } from 'react-bootstrap';
import { activeRecordingsData } from '../../data/mockData';

const ActiveRecordings = () => {
  const recording = activeRecordingsData[0];
  
  return (
    <Card className="card-dark fade-in">
      <Card.Body>
        <h6 className="section-header">ACTIVE RECORDINGS</h6>
        
        <div className="list-item">
          <div className="d-flex align-items-center">
            <span className="status-indicator status-green"></span>
            <div>
              <div className="list-item-title">{recording.timer}</div>
              <div className="list-item-meta">{recording.input}</div>
              <div className="list-item-meta">{recording.url}</div>
            </div>
          </div>
          <div className="text-end">
            <div className="list-item-meta">{recording.name}</div>
            <div className="list-item-meta">Input Type <span className="ms-2 fw-bold">{recording.bitrate}</span></div>
            <div className="list-item-meta">Bitrate <span className="ms-2 fw-bold">{recording.bitrate}</span></div>          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ActiveRecordings;


