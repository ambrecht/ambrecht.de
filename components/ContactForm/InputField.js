import { useContext, useEffect, useState } from 'react';
import FormContext from './FormContext';

import styled from 'styled-components';

//STYLE

const splitCamelCase = (s) =>
  s
    .replace(/([a-z0-9])([A-Z0-9])/g, '$1 $2')
    .replace(/^([a-z])/, (x) => x.toUpperCase());

const InputField = (props) => {
  const form = useContext(FormContext);

  const [error, setError] = useState('');

  const { onValidate, name, label, ...otherProps } = props;

  let value = form.value && form.value(name);

  useEffect(() => {
    if (onValidate) {
      setError(onValidate(value));
    }
  }, [onValidate, value]);

  const setInvalid = form.setInvalid;

  useEffect(() => {
    if (setInvalid) {
      setInvalid(name, error);
    }
  }, [setInvalid, name, error]);

  if (!form.value) {
    return 'InputField should be wrapped in a form';
  }

  return (
    <div className="InputField">
      <Input
        id={name}
        placeholder={name}
        onBlur={() => form.setDirty(name)}
        value={value || ''}
        onChange={(event) => {
          form.setDirty(name);
          form.setValue(name, event.target.value);
        }}
        {...otherProps}
      />{' '}
      <ERROR>{form.isDirty(name) && error ? error : <>&nbsp;</>}</ERROR>
    </div>
  );
};

export default InputField;

const Input = styled.input`
   {
    background: rgba(0, 0, 0, 0.3);
    width: 33vw;
    height: 1rem;
    padding: 1em;
    margin-bottom: 0.5rem;
    border: none;
    border-radius: 1rem;
    box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 0.3);
    transition: all 0.2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    font-weight: 300;
    &:hover {
      background-image: linear-gradient(to right, #2393ff 0%, #5f1df2 100%);
      box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
      color: rgba(255, 255, 255, 1);
    }

    &[type='email'],
    &[type='password'] {
      &:focus {
        background-image: linear-gradient(to right, #2393ff 0%, #5f1df2 100%);
        box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
      }
    }

    &[type='button'] {
      margin-top: 10px;
      width: 150px;
      font-size: 1rem;

      &:hover {
        cursor: pointer;
      }

      &:active {
        background-image: linear-gradient(to right, #2393ff 0%, #5f1df2 100%);
      }
    }
  }
`;

const ERROR = styled.div`
  padding: 0.2rem;

  color: white;
  font-size: 0.9rem;
  font-weight: 300;

  letter-spacing: 0.01em;

  background-image: linear-gradient(to right, #2393ff 0%, #5f1df2 100%);
  -webkit-background-clip: text;
  background-size: 100%;
  -webkit-text-fill-color: transparent;
`;
