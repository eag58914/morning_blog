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

	handleClick = (event) => {
		this.setState({
			isShowing: !this.state.isShowing
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
				<BlogForm />
				{this.state.isShowing ? title : null}
				<ul>{composedPosts}</ul>
				<button onClick={this.handleClick}>click me </button>
				<Footer />
			</div>
		);
	}
}
export default App;
