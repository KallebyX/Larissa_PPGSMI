import React, { useState, useEffect } from 'react';

const AnimacaoTreino: React.FC = () => {
  const [percentualContracao, setPercentualContracao] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentualContracao((prev) => (prev < 100 ? prev + 10 : 0)); // Simulação de contração
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Animação do Treino</h1>
      <div style={{ height: '200px', border: '1px solid black', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            bottom: `${percentualContracao}%`,
            left: '50%',
            width: '20px',
            height: '20px',
            backgroundColor: 'blue',
            borderRadius: '50%',
            transform: 'translateX(-50%)',
          }}
        ></div>
      </div>
      <p>Percentual de Contração: {percentualContracao}%</p>
    </div>
  );
};

export default AnimacaoTreino;