import React, {Component} from 'react'
import Comments from './Comments'
class Article extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            commentsVisible: false
        }
    }

    render() {
        const {article} = this.props;
        const comments = this.state.commentsVisible ? <Comments comments={article.comments}/> : null;
        const btnText = this.state.commentsVisible ? 'hide' : 'show';
        const button = this.state.isOpen ? <p><button onClick={this.showComments}>{btnText}</button></p> : null;
        const body = this.state.isOpen ? <p>{article.text}</p> : null;
        return (
            <section>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
                {button}
                {comments}
            </section>
        )
    }

    // define show/hide comment button  event
    showComments = ev => {
        this.setState({
            commentsVisible: !this.state.commentsVisible
        })
    };

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article