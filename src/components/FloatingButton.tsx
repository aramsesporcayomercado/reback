import React from 'react';
import IconButton from '@material-ui/core/IconButton';


interface Props {
  onClick: () => void;
}

const FloatingButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="floating-button" onClick={onClick}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default FloatingButton;
