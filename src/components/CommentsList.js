import React, {Component} from 'react'

class CommentsList extends Component {
    constructor() {
        super();
        this.state = {
            isVisible: false
        }
    }

    render() {
        const {comments} = this.props;
        const btnText = this.state.isVisible ? 'hide' : 'show';
        const button = <p>
            <button onClick={this.showComments}>{btnText}</button>
        </p>;
        const commList = this.state.isVisible ? this.checkComments(comments) : null;
        return (
            <ul>
                {button}
                {commList}
            </ul>
        )
    }

    checkComments = comments => {
        if (typeof(comments) === 'undefined') {
            return (
                <li> No comments</li>
            )

        } else {
            return (comments.map(comment =><li key={comment.id}>{comment.text}</li>))
        }

    };

    // define show/hide comment button  event
    showComments = ev => {
        this.setState({
            isVisible: !this.state.isVisible
        })
    };
}
export default CommentsList