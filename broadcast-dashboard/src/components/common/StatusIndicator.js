import React from 'react';

const StatusIndicator = ({ status, size = 'sm' }) => {
  const getStatusClass = () => {
    switch (status) {
      case 'active':
      case 'online':
      case 'recording':
      case 'completed':
        return 'status-green';
      case 'error':
      case 'offline':
      case 'failed':
        return 'status-red';
      case 'warning':
      case 'pending':
      case 'processing':
        return 'status-yellow';
      default:
        return 'status-red';
    }
  };

  return (
    <span 
      className={`status-indicator ${getStatusClass()}`}
      title={status}
    ></span>
  );
};

export default StatusIndicator;