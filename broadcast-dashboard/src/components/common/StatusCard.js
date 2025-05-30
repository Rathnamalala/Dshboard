import React from 'react';
import StatusIndicator from './StatusIndicator';

const StatusCard = ({ title, subtitle, status, onClick }) => {
  return (
    <div 
      className="input-card"
      onClick={onClick}
    >
      <div className="d-flex align-items-center justify-content-center mb-1">
        <StatusIndicator status={status} />
        <span className="input-title">{title}</span>
      </div>
      {subtitle && (
        <div className="input-subtitle">{subtitle}</div>
      )}
    </div>
  );
};

export default StatusCard;