import React, { useState } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  return (
    <div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        >
          {progress}%
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={increaseProgress}>
        Aumentar Progreso
      </button>
    </div>
  );
}

export default ProgressBar;
