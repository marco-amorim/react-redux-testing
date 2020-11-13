import React, { Component } from 'react';

class CommentBox extends Component {
	state = { comment: '' };

	handleSubmit = (event) => {
		event.preventDefault();

		this.setState({ comment: '' });
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<h4>Add a Comment</h4>
				<textarea
					onChange={(e) => this.setState({ comment: e.target.value })}
					value={this.state.comment}
				/>
				<div>
					<button>Submit Comment</button>
				</div>
			</form>
		);
	}
}

export default CommentBox;
