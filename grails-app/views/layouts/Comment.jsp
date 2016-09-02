<div className="commentBox">
	<h1>Comments</h1>

	<%--<CommentList data={this.state.data} />--%>
	<div className="commentList"/>

		<%--<Comment author={comment.author} key={index}>{comment.text}</Comment>--%>
		<div className="comment">
			<h2 className="commentAuthor">
				{this.props.author}
			</h2>
			{this.props.children}
		</div>

	</div>

	<%--<CommentForm formHandler={this.dataChange} />--%>
	<div className="commentForm">
		<form className="commentForm" onSubmit={this.formOnChange}>
			<input type="text" placeholder="Your NAme" ref="author" />
			<input type="text" placeholder="Sa something" ref="text" />
			<input type="submit" value="post"/>
		</form>
	</div>
</div>