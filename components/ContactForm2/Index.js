import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

//LOGIC
const SignupSchema = yup.object().shape({
  Name: yup.string().required(),
  E_Mail: yup.string().email().required(),
  Nachricht: yup.string().required(),
});

//MARKUP
export default function MARKUP({ sendState }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(SignupSchema),
  });

  return (
    <Wrapper onSubmit={handleSubmit(sendState)}>
      <Input {...register('Name')} placeholder="Name" />
      {errors.Name?.message && <ERROR>Ich benötige Ihren Namen.</ERROR>}
      <Input {...register('E_Mail')} placeholder="E-Mail" />
      {errors.E_Mail?.message && (
        <ERROR>Bitte geben Sie eine gültige E-Mail-Adresse an.</ERROR>
      )}
      <TextInput {...register('Nachricht')} placeholder="Nachricht"></TextInput>
      {errors.Nachricht?.message && (
        <ERROR>Bitte hinterlassen Sie eine Nachricht</ERROR>
      )}

      <Button type="submit">
        <Text>Absenden</Text>
      </Button>
    </Wrapper>
  );
}

//STYLE

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
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

  @media (max-width: 768px) {
    width: 70vw;
  }
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

const TextInput = styled.textarea`
  background: rgba(0, 0, 0, 0.3);
  width: 33vw;
  height: 10rem;
  padding: 1em;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 1rem;
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: rgba(255, 255, 255, 0.3);
  transition: all 0.2s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-weight: 300;

  @media (max-width: 768px) {
    width: 70vw;
  }

  &:hover {
    background-image: linear-gradient(to right, #2393ff 0%, #5f1df2 100%);
    box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
    color: rgba(255, 255, 255, 1);
  }

  &[type='email'],
  &[type='password'] {
    &:focus {
      color: rgba(255, 255, 255, 1);
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
`;

const Text = styled.span`
  background: linear-gradient(to right, #2393ff 0%, #5f1df2 100%);
  color: transparent;
  background-clip: text;
  text-transform: capitalize;
  font-weight: 600;
  line-height: 1em;
  letter-spacing: 0.1em;
`;

const Button = styled.button`
  cursor: inherit;
  font-size: ${(props) => `${props.size}em`};
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
    ${Text} {
      color: white;
    }
  }
`;
