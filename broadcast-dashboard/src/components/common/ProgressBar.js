import React from 'react';

const ProgressBar = ({ percentage, status = 'default', showPercentage = true }) => {
  const getProgressBarClass = () => {
    switch (status) {
      case 'success':
      case 'completed':
        return 'progress-bar-green';
      case 'error':
      case 'failed':
        return 'progress-bar-red';
      case 'processing':
      case 'active':
      default:
        return 'progress-bar-custom';
    }
  };

  return (
    <div className="d-flex align-items-center gap-2">
      <div className="progress-custom flex-grow-1">
        <div 
          className={`${getProgressBarClass()}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {showPercentage && (
        <span className="text-muted-custom small" style={{ minWidth: '40px' }}>
          {percentage}%
        </span>
      )}
    </div>
  );
};

export default ProgressBar;