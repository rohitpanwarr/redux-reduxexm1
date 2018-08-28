import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
        title: '',
        body: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  handleOnChange(e) {
      this.setState({[e.target.name]: e.target.value});
  }

  onSubmitForm(e) {
      e.preventDefault();

      const post = {
          title: this.state.title,
          body: this.state.body
      }

    //   fetch('https://jsonplaceholder.typicode.com/posts', {
    //       method: 'POST',
    //       headers: {
    //         'content-type': 'application/json'
    //       },
    //       body: JSON.stringify(post)
    //   })
    //   .then(res => res.json())
    //   .then(data => console.log(data));

    this.props.createPost(post);
  }

  render() {

    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmitForm}>
            <div>
                <label>Title: </label> <br />
                <input type="text" name="title" onChange={this.handleOnChange} value={this.state.title} />
            </div><br />
            <div>
                <label>Body: </label> <br />
                <textarea name="body" onChange={this.handleOnChange} value={this.state.body}></textarea>
            </div>
            <button type="submit">submit</button>
        </form>
        <hr />
      </div>
    )
  }
}

//export default PostForm;

export default connect(null, { createPost })(PostForm);