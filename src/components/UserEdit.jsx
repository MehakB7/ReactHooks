import React, { createContext, useContext, useState } from "react";
const UserContext = createContext({ username: "", email: "" });

const UserContextProvider = ({ children }) => {
  const [userDetails, setDetails] = useState({
    username: "Mehak",
    email: "Mehakbisht5@gmail.com",
  });

  return (
    <UserContext.Provider value={{ userDetails, setDetails }}>
      {children}
    </UserContext.Provider>
  );
};

const UserDetails = () => {
  const data = useUserContext();
  const { userDetails } = data;
  return (
    <div
      style={{
        border: "1px solid blue",
        padding: "2rem",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <p style={{ position: "absolute", left: "30%", top: "-10px" }}>
        <b>User Details</b>
      </p>

      <p>Hey my username is {userDetails.username}</p>
      <p>Contact me in {userDetails.email}</p>
      <EditUser />
    </div>
  );
};

const EditUser = () => {
  const { userDetails, setDetails } = useUserContext();
  return (
    <div
      style={{ border: "1px solid red", padding: "2rem", position: "relative" }}
    >
      <p style={{ position: "absolute", left: "30%", top: "-10px" }}>
        <b>Edit Username</b>
      </p>
      <input
        value={userDetails.username}
        onChange={(e) => {
          setDetails((prev) => ({ ...prev, username: e.target.value }));
        }}
      />
    </div>
  );
};

const Home = () => {
  return (
    <UserContextProvider>
      <div
        style={{
          border: "1px solid black",
          padding: "2rem",
          position: "relative",
        }}
      >
        <p style={{ position: "absolute", right: "50%", top: "-10px" }}>
          <b>Home</b>
        </p>
        <UserDetails />
      </div>
    </UserContextProvider>
  );
};

const useUserContext = () => {
  const { userDetails, setDetails } = useContext(UserContext);
  return { userDetails, setDetails };
};

export default Home;
