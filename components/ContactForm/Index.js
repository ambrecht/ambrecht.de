import { useEffect, useState } from 'react';
import SimpleForm from './SimpleForm';
import InputField from './InputField';
import TextInput from './TextInput';

import styled from 'styled-components';

const onSend = async (data) => {
  console.log(data);
  const res = await fetch('/api/sendgrid', {
    body: JSON.stringify({
      email: data.Mail,
      fullname: data.Name,
      message: data.Nachricht,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  });

  const { error } = await res.json();
  if (error) {
    console.log('ERROR', error);
    return;
  }
  console.log(fullname, email, subject, message);
};

const eMailCeck = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const FormExample0 = ({ onSubmit, onChange, initialValue = {} }) => {
  const [formFields, setFormFields] = useState(initialValue);
  const [valid, setValid] = useState(true);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    if (onChange) {
      onChange(formFields, valid, errors);
    }
  }, [onChange, formFields, valid, errors]);
  return (
    <Wrapper>
      <SimpleForm
        value={formFields}
        onChange={setFormFields}
        onValid={(v, errs) => {
          setValid(v);
          setErrors(errs);
        }}
      >
        <InputField
          name="Name"
          onValidate={(v) =>
            !v || v.length < 3 ? 'Dieser Name ist nicht authentisch ' : null
          }
        />
        <InputField
          name="Mail"
          onValidate={(v) =>
            !v || !eMailCeck.test(formFields.Mail)
              ? 'Keine Gültige E-Mail-Adresse'
              : null
          }
        />

        <TextInput
          name="Nachricht"
          onValidate={(v) =>
            !v || v.length < 10
              ? 'Um Ihnen zu helfen brauche ich mehr Informationen.'
              : null
          }
        ></TextInput>
        <Button
          onClick={() => {
            onSubmit && onSubmit(formFields), onSend(formFields);
          }}
          disabled={!valid}
        >
          Absenden
        </Button>
      </SimpleForm>
    </Wrapper>
  );
};
export default FormExample0;

//STYLE
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  cursor: inherit;
  font-size: 0.8em;
  padding: 1em 1.5em;
  border-radius: 3em;
  border: solid 0.2em transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(101deg, #2393ff, #5f1df2);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px white inset;
  transition-property: all;
  transition-duration: 0.5s;

  &:hover {
    box-shadow: none;

    color: white;
  }
`;
