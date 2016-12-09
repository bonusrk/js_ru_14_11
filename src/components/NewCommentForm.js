import React, {Component, PropTypes} from 'react'
import {add_comment} from '../AC/comment'


class NewCommentForm extends Component {
    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => {
        if (ev.target.value.length > 5) return
        this.setState({
            [field]: ev.target.value
        })
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.props.onAddComment(this.state)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange={this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange={this.handleChange('user')}/>
                <input type="submit"/>
            </form>
        )
    }
}

export default NewCommentForm