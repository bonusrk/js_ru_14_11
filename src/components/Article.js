import React, {Component} from 'react'
import Comments from './Comments'
class Article extends Component {

    constructor() {
        super();
        this.state = {
            isOpen: false,
            obj: {foo: 'bar'},
            commentsVisible: false
        }
    }

    render() {
        const {article} = this.props;
        const btnText = this.state.commentsVisible ? 'hide' : 'show';
        const button = this.state.isOpen ? <button onClick={this.showComments}>{btnText}</button> : null;
        const body = this.state.isOpen ? <p>{article.text}<br/>{button} </p> : null;

        const comments = this.state.commentsVisible ? <ul><Comments comments={article.comments}/></ul> : null;


        return (
            <section>
                <h3 onClick={this.handleClick}>{article.title}</h3>
                {body}
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