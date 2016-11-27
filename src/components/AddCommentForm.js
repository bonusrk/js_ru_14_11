import React, {Component, PropTypes} from 'react'

class AddCommentForm extends Component {

    state = {
        author: null,
        formContent: '',
    };

    static defaultProps = {
        username: 'Anonimus',
    };

    render() {
        const author = <label>{this.props.username}</label>;
        const placeholder = 'Place text here';
        return (
            <form method="" action="">
                <hr/>
                <div>Author : <strong>{author}</strong></div>
                <div>
                    <textarea name="comment" rows="10" cols="30" placeholder={placeholder}/>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default AddCommentForm