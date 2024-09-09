import { useContext } from "react";
import { Card, CardHeader, CardBody, Image } from "react-bootstrap";
import { StudentContext } from "../context/StudentContext";
import StudentHobbies from "./StudentHobbies";

function StudentDetailCard() {
  const { userInfo } = useContext(StudentContext);

  return (
    <Card>
      <CardHeader>
        <h4>Student Detail</h4>
      </CardHeader>
      <CardBody>
        <div className="text-center">
          <Image
            roundedCircle
            src={userInfo.profilePic}
            alt={userInfo.name}
            className="img-fluid rounded-circle"
            style={{ width: "150px", height: "150px" }}
          />
        </div>
        <h3 className="text-center mt-4">{userInfo.name}</h3>
        <hr />
        <p>
          <strong>Email:</strong> {userInfo.email}
        </p>
        <p>
          <strong>Phone:</strong> {userInfo.phone}
        </p>
        <p>
          <strong>Location:</strong> {userInfo.location}
        </p>
        <h4 className="mt-4">Hobbies</h4>
        <StudentHobbies />
        <p className="mt-4 fs-6">
          <em>{userInfo.bio}</em>
        </p>
      </CardBody>
    </Card>
  );
}

export default StudentDetailCard;
