import React, { useState } from 'react';
import { Button, Row } from 'react-bootstrap';

const TranslateForm = (props) => {
  const { handleTranslateClick } = props;
  const [translation, setTranslation] = useState('');

  const onChangeTranslation = (event) => {
    setTranslation(event.target.value);
  };

  const onTranslateClick = () => {
    handleTranslateClick(translation.toLowerCase());
  };

  const TranslateFormButtonStyle = {
    height: '45px',
    width: '110px',
  };
  return (
    <>
      <Row className="mb-3 justify-content-center">
        <input
          className="mr-2"
          placeholder="Type anything..."
          onChange={onChangeTranslation}
        ></input>
        <Button style={TranslateFormButtonStyle} onClick={onTranslateClick} variant="success">
          Translate
        </Button>
      </Row>
    </>
  );
};

export default TranslateForm;
