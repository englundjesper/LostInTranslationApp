import React from 'react';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router';
import ProfileCard from '../components/ProfileCard';
import * as AuthService from '../services/AuthService';
class ProfilePage extends React.Component {
  state = {
    redirect: !AuthService.isAuthenticated(),
    loggedInUser: AuthService.getLoggedInUser(),
    translationList: [],
  };

  componentDidMount() {
    this.setState({ translationList: AuthService.getList() });
  }

  handleOnClearList = () => {
    this.setState({ translationList: [] });
    AuthService.clearList();
  };
  render() {
    let { loggedInUser, redirect, translationList } = this.state;
    if (redirect) return <Redirect to="/login" />;
    return (
      <Container>
        <ProfileCard
          loggedInUser={loggedInUser}
          onClearList={this.handleOnClearList}
          translationList={translationList}
        ></ProfileCard>
      </Container>
    );
  }
}
export default ProfilePage;
