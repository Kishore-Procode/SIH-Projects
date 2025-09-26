import React, { useState } from 'react';
import luffyVideo from '../assets/biosecuritybasics.mp4';

const Overlay: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [canClose, setCanClose] = useState(false); // button hidden initially

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          minWidth: '60%',
          minHeight: '70%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Video */}
        <video
          src={luffyVideo}
          controls
          autoPlay
          onEnded={() => setCanClose(true)} // enable button when video ends
          style={{
            maxWidth: '100%',
            maxHeight: '400px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          }}
        />

        {/* Close Button only after video ends */}
        {canClose && (
          <button
            onClick={onClose}
            style={{
              marginTop: '1rem',
              background: '#f44336',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default Overlay;
