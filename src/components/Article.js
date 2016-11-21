import React, {Component} from 'react'
import CommentsList from './CommentsList'

class Article extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            //внеси этот стейт в Comments, а то очень перегруженный компонент выйдет
            commentsVisible: false
        }
    }

    render() {
        const {article} = this.props;
        // const comments = this.state.commentsVisible ? <Comments comments={article.comments}/> : null;
        // const btnText = this.state.commentsVisible ? 'hide' : 'show';
        // const button = this.state.isOpen ? <p><button onClick={this.showComments}>{btnText}</button></p> : null;
        const body = this.state.isOpen ?
            <div>
                {article.text}
                <CommentsList comments={article.comments}/>
            </div> : null;
        return (
            <section>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article