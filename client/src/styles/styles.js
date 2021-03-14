import styled, { createGlobalStyle } from 'styled-components';

import montserratRegular from '../fonts/Montserrat/Montserrat-Regular.ttf';
import poppinsBold from '../fonts/Poppins/Poppins-Bold.ttf';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${montserratRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Poppins';
    src: url(${poppinsBold}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
  }

  h2 {
    font-family: 'Poppins';
    color: #171514;
  }
`;

export const Nav = styled.nav`
  height: 5rem;
  width: 100%;
  background-color: #171514;
  font-family: 'Poppins';
  color: #FFFFFF;
  display: flex;
  align-items: center;

  @media (min-width: 768px) {
    margin-bottom: 5rem;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  margin: 2rem 0;

  @media (min-width: 768px) {
    width: 30%;
    margin: 0;
  }
`;

export const InputText = styled.input`
  display: block;
  border: none;
  outline: none;
  padding: 0.75rem;
  background-color: #F0F0F0;
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  box-sizing: border-box;
`;

export const InputSubmit = styled.input`
  border: none;
  outline: none;
  background-color: #171514;
  border-radius: 5px;
  color: #FFFFFF;
  padding: 0.75rem 2rem;
  cursor: pointer;
  margin-top: 20px;
  font-family: 'Poppins';
  width: 50%;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1028px;
  margin: 1.5rem auto;
  padding: 0 1rem;
  box-sizing: border-box;

  ${Nav} & {
    margin: 0 auto;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80vh;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-top: 1rem;
    justify-content: space-between;
    flex-direction: row;
    height: 100%;
  }
`;

export const CodeField = styled(SyntaxHighlighter)`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;

  @media (min-width: 768px) {
    width: 55%;
    height: auto;
  }
`;
