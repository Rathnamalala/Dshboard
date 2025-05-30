import React from 'react';
import { Card } from 'react-bootstrap';
import { activeRecordingLiveData } from '../../data/mockData';

const ActiveRecordingLive = () => {
  const data = activeRecordingLiveData;
  
  return (
    <Card className="card-dark fade-in">
      <Card.Body>
        <h6 className="section-header">ACTIVE RECORDING</h6>
        
        <div className="d-flex align-items-center gap-2 mb-3">
          <span className="status-indicator status-green"></span>
          <span className="text-primary-custom">{data.name}</span>
          <span className="text-secondary-custom">{data.input}</span>
        </div>
        
        <div className="mb-3">
          <div className="d-flex align-items-center gap-2 mb-2">
            {data.inputs.map((input, index) => (
              <span key={index} className="badge-custom badge-blue">{input}</span>
            ))}
            <span className="text-secondary-custom small">{data.tane}</span>
          </div>
        </div>
        
        <div className="mb-3">
          <div className="d-flex align-items-center gap-3">
            <span className="text-secondary-custom small">≡ {data.inputDetails}</span>
            <span className="text-muted-custom small">{data.date}</span>
          </div>
        </div>
        
        <div className="d-flex gap-3 text-muted-custom small">
          {data.additionalInputs.map((input, index) => (
            <span key={index}>{input}</span>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ActiveRecordingLive;