import React, { useState } from 'react';

import Form from './Form';
import ResponseField from './ResponseField';

import { Container } from '../styles/styles';

const InterlaceSection = () => {
  const [isInterlaced, setIsInterlaced] = useState();

  const checkIsInterlaced = async (intervals) => {
    //Codifica os valores dos campos para colocar na URI da requisição GET
    const encodedIntervals = encodeURI(JSON.stringify(intervals));

    const res = await fetch(`http://localhost:8080/interlace?intervalos=${encodedIntervals}`);
    const isInterlaced = await res.json();

    setIsInterlaced(isInterlaced);
  }

  return (
    <>
      <h2>/interlace</h2>
      <Container>
        <Form
          fetchFunction={checkIsInterlaced}
          name1='intervaloA'
          name2='intervaloB'
          placeholder1='20, 40'
          placeholder2='10, 60'
          submitName='Verificar'
        />
        <ResponseField
          codeString={JSON.stringify(isInterlaced) ? JSON.stringify(isInterlaced, null, 2) : ''}
        />
      </Container>
    </>
  );
}

export default InterlaceSection;
