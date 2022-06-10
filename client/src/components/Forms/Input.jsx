import React from 'react';

export const Input = ({ label, input, name, type, value }) => {
  return (
    <div className='form-input'>
      <label>{label}</label>
      <input type={type} name={name} value={value} {...input} />
    </div>
  );
};

export const Select = ({ label, name, input, options }) => {
  return (
    <div className='form-select'>
      <label>{label}</label>
      <br />
      <select autoComplete='off' name={name} {...input}>
        {options.map((option, idx) => {
          return <option key={idx}>{option}</option>;
        })}
      </select>
    </div>
  );
};

export const Textarea = ({ label, name, placeholder, input }) => {
  return (
    <div className='form-textarea'>
      <label>{label}</label>
      <br />
      <textarea
        autoComplete='off'
        name={name}
        placeholder={placeholder}
        {...input}
      />
    </div>
  );
};
