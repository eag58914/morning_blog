import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import BlogForm from './BlogForm';

class App extends Component {
	state = {
		isShowing: true,
		posts: [
			{
				title: 'My first  confetti Blog post',
				content: 'I love confetti!!! I put it everyhere!!!',
				user: 'Murray918'
			},
			{
				title: 'My second  confetti Blog post',
				content: "I hate confetti!!! It's everywhere!!!",
				user: 'cwill833'
			}
		]
	};

	handleShowForm = (event) => {
		this.setState({
			isShowing: !this.state.isShowing
		});
	};

	//update state here and pass this method down to another component
	handleAddPost = (post) => {
		this.setState({
			posts: [ { ...post }, ...this.state.posts ]
		});
	};
	render() {
		//compose components down here and later
		const title = <h1>Confetti Blog</h1>;
		const composedPosts = this.state.posts.map((item, index) => {
			return (
				<li key={index} className="post">
					<h3 className="postTitle">{item.title}</h3>
					<p>{item.content}</p>
					<h6>{item.user}</h6>
				</li>
			);
		});
		return (
			<div className="App container">
				<Nav />
				{this.state.isShowing ? (
					<BlogForm handleAddPost={this.handleAddPost} handleToggle={this.handleShowForm} />
				) : (
					<button onClick={this.handleShowForm}>Add Posts </button>
				)}
				<ul>{composedPosts}</ul>
				<Footer />
			</div>
		);
	}
}
export default App;
