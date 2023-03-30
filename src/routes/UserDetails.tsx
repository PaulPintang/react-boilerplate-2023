import { useParams, Link, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

const UserDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { users } = useAppSelector((state) => state.user);
  const user = users.filter((user) => user.id === Number(id));

  return (
    <div>
      <h1>User Details</h1>
      <p className="text-blue-400 cursor-pointer" onClick={() => navigate(-1)}>
        Return
      </p>
      {user?.map((data) => (
        <div key={data.id}>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Username: {data.username}</p>
        </div>
      ))}
    </div>
  );
};

export default UserDetails;
