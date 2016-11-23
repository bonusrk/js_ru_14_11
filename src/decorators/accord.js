import React from 'react'

export default (Component) => class Accord extends React.Component {
    state = {
        openArticleId: null,
    };

    openArticle = id => ev => {
        this.setState({
            openArticleId: id == this.state.openArticleId ? null : id
        })
    };

    render() {
        return <Component {...this.props} {...this.state} openArticle={this.openArticle}/>
    }

}
