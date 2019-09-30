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

	handleSubmit = (event) => {
		event.preventDefault();
		console.log('line 19 in BlogPost/index :', event);
		this.props.handleAddPost({ ...this.state }); //this is what actuallt sets the state
	};
	render() {
		return (
			<form className="blog-form" onSubmit={this.handleSubmit}>
				<h1>{this.state.title}</h1>
				<div className="post-title-author">
					{''}
					<label>Title</label>
					<input onChange={this.handleOnChange} value={this.state.title} type="text" name="title" />
				</div>
				<label>Author</label>
				<input type="text" name="user" onChange={this.handleOnChange} />

				<div>
					<label>New Post</label>
					<textarea type="text" name="content" onChange={this.handleOnChange} />
					<input type="submit" />
					<button className="button-primary" onClick={this.props.handleToggle}>
						close
					</button>
				</div>
			</form>
		);
	}
}

export default BlogForm;

BlogForm.propTypes = {
	handleToggle: PropTypes.func,
	handleAddPost: PropTypes.func
};
