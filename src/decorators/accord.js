import React from 'react'

export default (Component) => class Accord extends React.Component {
    state = {
        //не привязывайся к названиям сущностей в декораторах, вся их суть в том, чтобы использовать с разными компонентами и данными. Сделай openItemId
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
