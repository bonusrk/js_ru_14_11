import React  from 'react'

function Comments(props) {
    //if comments is undefined
    if (typeof(props.comments) == 'undefined') {
        return (
            <li>No comments</li>)
    } else {
        const {comments} = props;
        const commentsList = comments.map(comment => <li key={comment.id}>{comment.text}</li>);
        return (
            <ul>
                {commentsList}
            </ul>
        )
    }
}

export default Comments