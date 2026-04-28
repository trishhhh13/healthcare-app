import React, { useEffect, useState, type JSX } from 'react';
import { X, CheckCircle, Info, AlertCircle } from 'lucide-react';
import './styles.css';

export type ToastType = 'success' | 'info' | 'error';

type ToastProps = {
  message?: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
};

const Toast: React.FC<ToastProps> = ({
  message = "",
  type = 'success',
  duration = 5000,
  onClose = () => { }
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons: Record<ToastType, JSX.Element> = {
    success: <CheckCircle className="toast-icon success" size={20} />,
    info: <Info className="toast-icon info" size={20} />,
    error: <AlertCircle className="toast-icon error" size={20} />,
  };

  return (
    <div className={`toast-container ${isVisible ? 'visible' : ''} ${type}`}>
      <div className="toast-content">
        {icons[type]}
        <span className="toast-message">{message}</span>
        <button
          className="toast-close"
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300);
          }}
        >
          <X size={16} />
        </button>
      </div>
      <div className="toast-progress-bar">
        <div
          className="toast-progress"
          style={{ animationDuration: `${duration}ms` }}
        />
      </div>
    </div>
  );
};

export default Toast;