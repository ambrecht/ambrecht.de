import React, { useCallback, useEffect, useState } from 'react';
import './SimpleForm.css';
import FormContext from './FormContext';
function updateWith(oldValue, field, value) {
  const newValue = { ...oldValue };
  newValue[field] = value;
  return newValue;
}
const SimpleForm = ({ children, value, onChange, onValid }) => {
  const [values, setValues] = useState(value || {});
  useEffect(() => {
    setValues(value || {});
  }, [value]);
  useEffect(() => {
    if (onChange) {
      onChange(values);
    }
  }, [onChange, values]);
  let setValue = useCallback(
    (field, v) => setValues((vs) => updateWith(vs, field, v)),
    [setValues],
  );
  let getValue = useCallback((field) => values[field], [values]);
  let form = {
    setValue: setValue,
    value: getValue,
  };
  return (
    <div className="SimpleForm-container">
      <FormContext.Provider value={form}>{children}</FormContext.Provider>
    </div>
  );
};
export default SimpleForm;
