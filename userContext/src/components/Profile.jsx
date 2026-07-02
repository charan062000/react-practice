import { useContext } from "react";
import UserContext from "../context/UserContext";


function Profile() {
  const { user } = useContext(UserContext);

  return (
    <>
      <div>Profile</div>
      { !user && <p>please Login</p> }
      { user && <p>Welcome {user.username}</p> }
    </>
  );
}

export default Profile;
