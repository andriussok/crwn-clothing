import React from 'react';

import './form-input.styles.scss';

// we want to bubble up any onChange that the input has, therefore we need handleChnge

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {
      label ? (
      <label className={ `${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
            {label}
          </label>)
        : null
    }
  </div>
);

export default FormInput;