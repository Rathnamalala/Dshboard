import React from 'react';
import { Card } from 'react-bootstrap';
import { activeRecordingsData } from '../../data/mockData';

const ActiveRecordingSimple = ({ index = 0 }) => {
  // Allow overriding the index to show different data
  const recording = activeRecordingsData[index % activeRecordingsData.length];
  
  return (
    <Card className="card-dark fade-in">
      <Card.Body>
        <h6 className="section-header">ACTIVE RECORDING {index + 2}</h6>
        
        <div className="list-item">
          <div className="d-flex align-items-center">
            <span className="status-indicator status-green"></span>
            <div>
              <div className="list-item-title">{recording.timer}</div>
              <div className="list-item-meta">{recording.input}</div>
            </div>
          </div>
          <div className="text-end">
            <div className="list-item-meta">{recording.name}</div>
            <div className="list-item-meta">{recording.bitrate}</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ActiveRecordingSimple;
