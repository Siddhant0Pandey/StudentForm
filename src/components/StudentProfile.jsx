import { useContext, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  InputGroup,
  Form,
} from "react-bootstrap";
import { StudentContext } from "../context/StudentContext";
import StudentDetailCard from "./StudentDetailCard";
import users from "../UserInfo";

function StudentProfile() {
  const { setUserInfo, searchUser, setSearchUser, setUsersList } =
    useContext(StudentContext);

  useEffect(() => {
    const filterUser = users.filter((user) => {
      return user.name.toLowerCase().includes(searchUser.toLowerCase());
    });
    if (filterUser.length > 0) {
      setUsersList(filterUser);
      setUserInfo(filterUser[0]);
    } else {
      setUsersList({});
    }
  }, [searchUser, setUserInfo, setUsersList]);

  return (
    <Container className="mt-5">
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Search User ....."
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
        />
      </InputGroup>
      <Row>
        <Col md="4">
          <Card>
            <CardHeader>
              <h4>Students</h4>
            </CardHeader>
            <CardBody>
              <ListGroup className="gap-2">
                {users.map((user) => (
                  <ListGroupItem
                    key={user.id}
                    variant="dark"
                    className="cursor-pointer text-center"
                    onClick={() => setUserInfo(user)}
                  >
                    {user.name}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <StudentDetailCard />
        </Col>
      </Row>
    </Container>
  );
}

export default StudentProfile;
