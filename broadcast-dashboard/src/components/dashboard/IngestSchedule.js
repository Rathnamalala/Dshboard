import React from 'react';
import { Card } from 'react-bootstrap';
import { ingestScheduleData } from '../../data/mockData';

const IngestSchedule = () => {
  const scheduleItem = ingestScheduleData[0];
  
  return (
    <Card className="card-dark fade-in">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="section-header mb-0">INGEST SCHEDULE</h6>
          <button type="button" className="view-all-link" style={{ background: 'none', border: 'none', padding: 0 }}>
            VIEW ALL
          </button>
        </div>
        
        <div className="list-item">
          <div>
            <div className="list-item-title">{scheduleItem.name}</div>
            <div className="list-item-meta">Tomorrow, &lt; 10:00</div>
          </div>
          <div className="text-end">
            <div className="list-item-meta">{scheduleItem.time}</div>
            <div className="list-item-meta">{scheduleItem.input}</div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default IngestSchedule;