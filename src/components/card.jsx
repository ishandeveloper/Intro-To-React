import React, {useState, useEffect} from 'react';

function Card(props) {

  const [user, setUser] = useState({});

  useEffect(() => {
  
    async function fetchData() {
      let username=props.username; // You can write your username here

      let dev_data = await fetch(`https://dev.to/api/users/by_username?url=${username}`)
                      .then((res) => res.json())
                      .then((data) => data);
      setUser(dev_data);  
  }
    fetchData();  
}, [] );



return (
  <div className="card">
    <div className="user-image">
      <img src={user.profile_image} alt="User Profile"></img>
    </div>

    <div className="user-info">
      <div className="name">{user.name}</div>
      <div className="handle">@{user.username}</div>
      <div className="summary">{user.summary}</div>
    </div>

    <div className="location">{user.location}</div>
  </div>
);
}

export default Card;