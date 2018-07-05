import React from "react";
import { Form, Label } from "semantic-ui-react";
import './Error.css';

const TextInput = ({
  input,
  width,
  type,
  placeholder,
  style,
  refName,
  cssName,
  disabled,
  meta: { touched, error }
}) => {
  return (
    <Form.Field error={touched && !!error} width={width} className={cssName} disabled={disabled}>
      <label>{placeholder}</label>
      <input 
        {...input} 
        placeholder={placeholder} 
        type={type} 
        style={style} 
        ref={refName} />
      {touched &&
        error && (
          <Label as='a' color='red' basic pointing>
            {error}
          </Label>
        )}
    </Form.Field>
  );
};

export default TextInput;
