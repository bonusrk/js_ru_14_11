import React, {Component} from 'react'

class AddCommentForm extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
        };

    }

    static defaultProps = {
        username: 'Anonimus',
    };

    handleChange = field => event => this.setState({
        [field]: event.target.value
    });

    render() {
        const author = <label>{this.props.username}</label>;
        return (
            <form method="" action="">
                <hr/>
                <div>Author : <strong>{author}</strong></div>
                <div>
                    <textarea name="comment" rows="10" cols="30" value={this.state.text} onChange = {this.handleChange('text')}/>
                </div>
                <button>Submit</button>
            </form>
        )
    }

}

export default AddCommentForm