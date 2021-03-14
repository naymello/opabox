import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { CodeField } from '../styles/styles';

const ResponseField = (props) => {
  return (
    <CodeField
      language="javascript"
      style={dracula}
    >
      {props.codeString}
    </CodeField>
  );
};

export default ResponseField;
