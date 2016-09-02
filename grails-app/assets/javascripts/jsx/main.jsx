var data = [
	{author: "Pete Hunt", text: "This is one comment"},
	{author: "Jordan Walke", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
	getInitialState: function(){
		return {data: this.props.data};
	},

	dataChange: function(author, text){
		var tmpData = this.state.data;
		tmpData.push({
			author: author,
			text: text
		});

		this.setState({data:tmpData});


	},

	render: function() {

		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data} />
				<CommentForm formHandler={this.dataChange} />
			</div>
		);
	}
});

var CommentList = React.createClass({
	render: function() {
		var comments = this.props.data.map(function(comment, index){
			return <Comment author={comment.author} key={index}>{comment.text}</Comment>
		}.bind(this));

		return (
			<div className="commentList">
				{comments}
			</div>
		);
	}
});

var CommentForm = React.createClass({
	formOnChange: function(e){
		e.preventDefault();
		var author = this.refs.author.value;
		var text = this.refs.text.value;

		if(author!="" && text!=""){
			this.props.formHandler(author, text);
			this.refs.author.value = '';
			this.refs.text.value = '';
		}

		else{
			alert("Fill author and text");
		}

	},
	render: function() {
		return (
			<div className="commentForm">
				<form className="commentForm" onSubmit={this.formOnChange}>
					<input type="text" placeholder="Your name" ref="author"/>
					<input type="text" placeholder="Say something..." ref="text"/>
					<input type="submit" value="Post" />
				</form>
			</div>
		);
	}
});

var Comment = React.createClass({

	render: function() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				{this.props.children}
			</div>
		);
	}
});

ReactDOM.render(
	<CommentBox data={data}/>,
	document.getElementById('content')
);