import React, { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import axios from "axios";
import { useRouter } from "next/router";

export default function authorDetails() {
  const router = useRouter();
  const { authorId } = router.query;
  const isCreate = !authorId;
  const [author, setAuthor] = useState({});
    console.log(authorId)

  useEffect(() => {
    if (authorId) {
      axios
        .get(`http://localhost:3001/profiles/${authorId}`)
        .then(res => {
            setAuthor(res.data);
        })
        .catch(err => {
          throw err;
        });
    }
  }, [authorId]);

  function handleChange(event) {
    setAuthor({...author,[event.target.name]: event.target.value});
  }

  function handleSubmit() {
    axios
      .post("http://localhost:3001/profiles/", author)
      .then(res => {
        alert(
          `${isCreate ? "Create" : "Edit"} author ${JSON.stringify(
            res.data
          )} successfully!!!`
        );
      })
      .catch(err => {
        throw err;
      });
  }

  return (
    <div>
      <h1>Author details</h1>
      <form>
        <div>
          <label>Id</label>
          <input name="id" value={author.id || ""} onChange={handleChange} />
        </div>
        <div>
          <label>Name</label>
          <input name="name" value={author.name || ""} onChange={handleChange} />
        </div>
        <div>
          <label>Birthday</label>
          <input
            type="date"
            name="birthday"
            value={author.birthday || ""}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}