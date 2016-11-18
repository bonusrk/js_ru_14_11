import React  from 'react'


function Comments(props) {
    console.log(typeof(props.comments));
    //if comments is undefined
    if (typeof(props.comments) == 'undefined') {
        return (<ul>
            <li>No comments</li>
        </ul>)
    } else {
        const {comments} = props;
        console.log(props);
        const commentsList = comments.map(comment => <li key={comment.id}>{comment.text}</li>);

        return (
            <ul>
                {commentsList}
            </ul>
        )
    }
}

export default Comments