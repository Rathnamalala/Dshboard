import React from 'react';
import { Card } from 'react-bootstrap';
import { ingestHistoryData } from '../../data/mockData';

const IngestHistory = () => {
  const historyData = ingestHistoryData;
  return (
    <Card className="card-dark fade-in card-gradient">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h6 className="section-header mb-0">INGEST HISTORY</h6>
          <button type="button" className="view-all-link" style={{ background: 'none', border: 'none', padding: 0 }}>
            VIEW ALL
          </button>
        </div>
        
        {historyData.map((item) => (
          <div key={item.id} className="list-item">
            <div className="list-item-title">{item.name}</div>
            <div className="list-item-meta">{item.date}</div>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
};

export default IngestHistory;