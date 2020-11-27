import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';

const TranslatedSigns = (props) => {
  const { sentence } = props;
  const [sentenceArray, setSentenceArray] = useState([]);

  const isAlpha = (char) => {
    return /^[A-Z]$/i.test(char);
  };

  const signStyle = {
    width: '60px',
    height: 'auto',
  };

  useEffect(() => {
    if (sentence) {
      setSentenceArray([...sentence]);
    }
  }, [sentence]);

  const translatedSentence = sentenceArray.map((char, index) =>
    isAlpha(char) ? (
      <img key={index} style={signStyle} src={`/signs/${char}.png`}></img>
    ) : (
      <img key={index} style={signStyle} src={'/Empty.png'}></img>
    ),
  );
  return <Row className="justify-content-center">{translatedSentence}</Row>;
};
export default TranslatedSigns;
