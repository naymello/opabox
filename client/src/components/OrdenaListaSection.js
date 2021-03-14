import React, { useState } from 'react';

import Form from './Form';
import ResponseField from './ResponseField';

import { Container } from '../styles/styles';

const OrdenaListaSection = () => {
  const [sortedListsObject, setSortedListsObject] = useState();

  const sortLists = async (lists) => {
    const res = await fetch('http://localhost:8080/ordenaLista', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        listas: {
          ...lists
        }
      })
    });
    const sortedListsObject = await res.json();

    setSortedListsObject(sortedListsObject);
  }

  return (
    <>
      <h2>/ordenaLista</h2>
      <Container>
        <Form
          fetchFunction={sortLists}
          name1='salaN'
          name2='salaS'
          placeholder1='1, 5, 7, 8'
          placeholder2='a, x, n'
          submitName='Ordenar'
        />
        <ResponseField
          codeString={sortedListsObject ? JSON.stringify(sortedListsObject, null, 2) : ''}
        />
      </Container>
    </>
  );
}

export default OrdenaListaSection;
