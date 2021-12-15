import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const EditAuthor = (props) => {
  const {id} = props;
  const [authorName, setAuthorName] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
      axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setAuthorName(res.data.authorName);
            })
            .catch((err) => {
                console.log(err);
                
            });
    }, [id])

    const editSubmitHandler = (e) => {
        e.preventDefault();

        

        axios
          .put(`http://localhost:8000/api/authors/${id}`, {authorName})
          .then((res) => {
            console.log(res);
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
            <header>
                <h1>Edit this Author: </h1>
                <Link to={"/"}>Home</Link>
            </header>
            <form onSubmit={editSubmitHandler}>
                <label>Name:</label>
                <input
                    onChange={(e) => setAuthorName(e.target.value)}
                    name="authorName"
                    value={authorName}/>
                {errors.authorName ? <span>{errors.authorName.message}</span> : null}
                <button>Submit</button>
                <button onClick={(e) => navigate("/")}>Cancel</button>
            </form>
        </div>
    );
};

export default EditAuthor;