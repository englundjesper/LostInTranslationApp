import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router';
import TranslatedSigns from '../components/TranslatedSigns';
import TranslateForm from '../components/TranslateForm';
import * as ListService from '../services/ListService';
class HomePage extends React.Component {
  state = { redirect: false, sentenceToTranslate: '' };

  handleTranslateClick = (sentence) => {
    this.setState({ sentenceToTranslate: sentence });
    ListService.addToList(sentence);
  };
  render() {
    let { redirect, sentenceToTranslate } = this.state;
    if (redirect) return <Redirect to="/login" />;
    return (
      <Container className="min-vh-100">
        <TranslateForm
          className="mt-2"
          handleTranslateClick={this.handleTranslateClick}
        ></TranslateForm>
        <TranslatedSigns sentence={sentenceToTranslate} />
      </Container>
    );
  }
}
export default HomePage;
