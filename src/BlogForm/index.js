import React, { Component } from 'react';
import './BlogForm.css';
import PropTypes from 'prop-types';

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
				<button onClick={this.props.handleToggle}>close</button>
			</form>
		);
	}
}

export default BlogForm;

BlogForm.propTypes = {
	handleToggle: PropTypes.func
};
