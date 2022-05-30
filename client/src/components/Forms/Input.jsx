import React from 'react';

export const Input = ({ label, input, name, type, placeholder }) => {
    return (
        <div className="form-input">
            <label>{label}</label>
            <input 
                type={type} 
                autoComplete="off" 
                name={name}
                placeholder={placeholder}
                {...input}
            />
        </div>
    )
}

export const Select = ({ label, name, input }) => {
    return (
        <div className="form-select">
            <label>{label}</label><br />
            <select  
                autoComplete="off" 
                name={name}
                {...input}
            >
                <option selected disabled>—</option>
                <option name="wardrobe">Шкаф</option>
                <option name="kitchen">Кухня</option>
            </select>
        </div>
    )
}

export const Textarea = ({ label, name, placeholder, input }) => {
    return (
        <div className="form-textarea">
            <label>{label}</label><br />
            <textarea  
                autoComplete="off" 
                name={name}
                placeholder={placeholder}
                {...input}
            />
        </div>
    )
}
