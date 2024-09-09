import { useContext } from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { StudentContext } from "../context/StudentContext";

function StudentHobbies() {
  const { userInfo } = useContext(StudentContext);

  return (
    <Row>
      <Col md="4" className="mt-2">
        <ListGroup className="gap-2">
          {userInfo.hobbies.map((hobby, index) => (
            <ListGroupItem variant="light" key={index}>
              {hobby}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
}

export default StudentHobbies;
