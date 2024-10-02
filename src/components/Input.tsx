import React from 'react';

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string; // Adiciona o placeholder como opcional
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <input 
        type={type} 
        value={value} 
        onChange={onChange} 
        placeholder={placeholder} // Atribui o placeholder ao input
      />
    </div>
  );
};

export default Input;