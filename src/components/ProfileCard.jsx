import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './ProfileCard.css';
const ProfileCard = (props) => {
  const { loggedInUser, onClearList, translationList } = props;
  const [list, setList] = useState();

  useEffect(() => {
    const items = translationList.map((item, idx) => (
      <div className={idx % 2 == 0 ? 'item item-odd' : 'item item-even'} key={idx}>
        {item}
      </div>
    ));
    const renderList = () => {
      return translationList.length > 0 ? (
        <Row className="justify-content-center">
          <Col sm={8}>
            <div>
              Here is your{' '}
              {translationList.length > 1
                ? translationList.length + ' latest translations!'
                : 'lastest translation!'}
            </div>
          </Col>
          <Col sm={8} className="item-list mt-3">
            {items}
          </Col>
        </Row>
      ) : (
        <div className="mb-3 ">You have no translations!</div>
      );
    };
    setList(renderList());
  }, [translationList]);

  return (
    <Row className="justify-content-center">
      <Card className="text-center justify-content-center">
        <Card.Header>{loggedInUser}</Card.Header>
        <Card.Body className="profile-card">
          {list}
          <div className="mt-3">
            <Button variant="danger" onClick={onClearList}>
              Clear Translation List!
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Row>
  );
};
export default ProfileCard;
