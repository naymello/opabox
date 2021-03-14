import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';

import { StyledForm, InputText, InputSubmit } from '../styles/styles';

/* A lógica dos 2 forms da página são a mesma, com exceção da forma em as requisições são
  feitas. Assim, toda a lógica comum foi abstraida para o component de form, seguindo o DRY */

const Form = (props) => {
  const { register, handleSubmit } = useForm();
  const [state, setState] = useState();

  //Usa a função de fetch de cada sessão no momento em que o state é modificado pelo onSubmit()
  useEffect(() => {
    if (state) props.fetchFunction(state);
  }, [state, props])

  const onSubmit = data => {
    setState(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label>
        {props.name1}
        <InputText
          type="text"
          placeholder={props.placeholder1}
          name={props.name1}
          ref={register}
        />
      </label>
      <label>
        {props.name2}
        <InputText
          type="text"
          placeholder={props.placeholder2}
          name={props.name2}
          ref={register}
        />
      </label>
      <InputSubmit type="submit" value={props.submitName} />
    </StyledForm>
  );
}

export default Form;
