import React from 'react';
import { Card } from 'react-bootstrap';
import { inputMonitorData } from '../../data/mockData';

const InputMonitor = () => {
  const inputData = inputMonitorData;

  const getStatusClass = (status) => {
    return status === 'active' ? 'status-green' : 'status-red';
  };

  const handleInputClick = (inputId) => {
    console.log(`Input ${inputId} clicked`);
  };  return (
    <Card className="card-dark fade-in card-gradient">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="section-header mb-0">INPUT MONITOR</h6>
          <button type="button" className="view-all-link" style={{ background: 'none', border: 'none', padding: 0 }}>VIEW ALL</button>
        </div>
        
        <div className="input-grid">
          {inputData.map((input) => (
            <div 
              key={input.id}
              className="input-card"
              onClick={() => handleInputClick(input.id)}
            >
              <div className="d-flex align-items-center justify-content-center mb-1">
                <span className={`status-indicator ${getStatusClass(input.status)}`}></span>
                <span className="input-title">{input.name}</span>
              </div>
              <div className="input-subtitle">{input.subtitle}</div>
            </div>
          ))}
        </div>
      </Card.Body>
    </Card>
  );
};

export default InputMonitor;