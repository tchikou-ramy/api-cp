// create a functional component that will get the list of users using axios from https://jsonplaceholder.typicode.com/users inside useEffect hooks , useState hooks to save data into listOfUser state and then map over the listOfUser to display the list of users
import { useState, useEffect } from "react";
import axios from "axios";

const Userlist = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setListOfUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="body">
      <ul>
        {listOfUser.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Userlist;
// does then replace async? No, it's just a different way of writing the same thing. You can use async/await or .then() or .catch() or any combination of the three. It's just a matter of preference.
// request body have payload data to be used to interact with the database?  true 
// http status vary from 2xx to 5xx? true
// cann we use axios on client applicaiton? true
// what is the most used http requests methods : GET, POST, PUT, DELETE
// does the fetch api let us use all the get methods? true
// what put method is used for? update
// why we use axios? to make http requests
// what is json : javascript object notation to store data
// do we have to install the fetch to use it in javascript? no
// what is the name of the axios function that deal with occurent requests ? axios.all
// best course to learn tailwind css in 2022 : https://www.youtube.com/watch?v=3JlY4lXujQ8