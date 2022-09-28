import React, { Component } from "react";
import axios from "axios";
import Link from "next/link"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      author: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/profiles")
      .then(res => {
        this.setState({ author: res.data });
      })
      .catch(err => {
        throw err;
      });
  }
  handleCreate = () => {
    window.location.href = "/author/add";
  };

  render() {
    const { author } = this.state;
    return (
      <div>
        <h1>Author</h1>
        <ul>
          {author.map(author => (
                      <div key={author.id}>
                      <Link href={`/author/${encodeURIComponent(author.id)}`}><a> {author.name} </a></Link>
                    </div>
          ))}
        </ul>
        <button type="button" onClick={this.handleCreate}>
          Create
        </button>
      </div>
    );
  }
}

export default App;