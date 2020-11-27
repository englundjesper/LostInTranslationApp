import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Redirect } from 'react-router';
import ProfileCard from '../components/ProfileCard';
import * as AuthService from '../services/AuthService';
import * as ListService from '../services/ListService';
class ProfilePage extends React.Component {
  state = {
    redirect: !AuthService.isAuthenticated(),
    loggedInUser: AuthService.getLoggedInUser(),
    translationList: [],
  };

  componentDidMount() {
    this.setState({ translationList: ListService.getList() });
  }

  handleOnClearList = () => {
    this.setState({ translationList: [] });
    ListService.clearList();
  };
  render() {
    let { loggedInUser, redirect, translationList } = this.state;
    if (redirect) return <Redirect to="/login" />;
    return (
      <Container className="min-vh-100">
        <Row className="h-100">
          <Col sm={12}>
            <ProfileCard
              loggedInUser={loggedInUser}
              onClearList={this.handleOnClearList}
              translationList={translationList}
            ></ProfileCard>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ProfilePage;
