import React, { useState, useEffect } from "react";
const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://www.melivecode.com/api/users");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);

      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <hr />
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.fname} {user.lname} - {user.username}
            <br />
            <img src={user.avatar}style={{width:"150px",marginTop:"10px"}} alt={`Avatar for ${user.fname}`} />
            <hr />
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};
export default App;