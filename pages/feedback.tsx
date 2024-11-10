import React, { useState } from 'react';

const Feedback: React.FC = () => {
  const [feedback, setFeedback] = useState('');

  const handleEnviarFeedback = () => {
    alert(`Feedback enviado: ${feedback}`);
    setFeedback('');
  };

  return (
    <div>
      <h1>Enviar Feedback</h1>
      <textarea
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder="Escreva seu feedback"
        rows={4}
        style={{ width: '100%' }}
      ></textarea>
      <button onClick={handleEnviarFeedback}>Enviar Feedback</button>
    </div>
  );
};

export default Feedback;
