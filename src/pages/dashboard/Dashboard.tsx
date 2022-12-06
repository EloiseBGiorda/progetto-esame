import { UserContext } from "../login/AuthContext";
import Navbar from "../shared/Navbar";

const Dashboard = () => {
  const { currentUser, logOut } = UserContext();

  return (
    <>
      <Navbar></Navbar>
      <div>you are in your dashboard {currentUser?.email}</div>
      <button onClick={logOut}>LOG OUT</button>
    </>
  );
};

export default Dashboard;
