import "/src/components/UserProfile.css";
import { useEffect, useState } from "react";

function UserProfile() {
  const [userProfile, setUserProfile] = useState(null);

  //Fetch data with fetch api
  function fetchData() {
    fetch("https://randomuser.me/api/")
      .then((response) => {
        return response.json(); //This converts the response to a json that we can use.
      })
      .then((data) => {
        console.log(data);
        let userData = data.results[0];
        setUserProfile(userData);
      }) // This makes it available to used to used

      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Fetching Data in React!</h1>
      {userProfile !== null ? (
        <div id="profile">
          <h2> User profile</h2>
          <img id="prof-image" src={userProfile.picture.large} alt="" />
          <p id="name">Name: {userProfile.name.first}</p>
          <p id="age">Age: {userProfile.age}</p>
          <p id="gender">Sex:{userProfile.gender}</p>
          <div id="location">
            <p id="city">Location: {userProfile.location.city},</p>
            <p id="country"> {userProfile.location.country}</p>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default UserProfile;
