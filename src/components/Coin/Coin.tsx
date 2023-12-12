import React from 'react';
import './style.css';

interface CircleProps {
  // Você pode adicionar mais propriedades conforme necessário
}

const Coin: React.FC<CircleProps> = () => {
  return (
    <div className="outerCircle">
      <div className="innerCircle"></div>
    </div>
  );
};

export default Coin;
