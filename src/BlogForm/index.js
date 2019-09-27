import React, { Component } from 'react';
import './BlogForm.css';

class BlogForm extends Component {
	state = {
		title: '',
		content: '',
		user: ''
	};
	handleOnChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	render() {
		return (
			<form className="blog-form">
				<h1>{this.state.title}</h1>
				<input onChange={this.handleOnChange} value={this.state.title} type="text" name="title" />
				<input type="text" name="user" onChange={this.handleOnChange} />
				<input type="text" name="content" onChange={this.handleOnChange} />
			</form>
		);
	}
}

export default BlogForm;
