import React from 'react';

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem' }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          padding: '0.5rem',
          fontSize: '1rem',
          borderRadius: '4px',
          border: '1px solid #ccc',
          width: '100%',
        }}
      />
    </div>
  );
};

export default Input;
