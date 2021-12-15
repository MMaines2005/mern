import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const NewAuthor = (props) => {
  const [errors, setErrors] = useState({});
  const [authorName, setAuthorName] = useState("");

  // This is triggered when form is submitted
  const newSubmitHandler = (e) => {
    e.preventDefault();
    // make axios post request with author data in object as second arg
    // This second arg contains the data that is sent to server.
    // The keys in this object need to match up with the field names specified in models.py in back
    axios
      .post(`http://localhost:8000/api/authors`, {
        authorName,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      
      <form onSubmit={newSubmitHandler}>
        <header>
          <h1>Favorite Authors</h1>
          
          <Link to={"/"}>Home</Link>
        </header>
        <label>Name:</label>
        
        <input
          onChange={(e) => setAuthorName(e.target.value)}
          name="authorName"
          value={authorName}
        />
        {errors.authorName ? <span>{errors.authorName.message}</span> : null}
        <button>Submit</button>
        <button onClick={(e) => navigate("/")}>Cancel</button>
      </form>
    </div>
  );
};

export default NewAuthor;

