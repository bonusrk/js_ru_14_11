import React from 'react'

export default (Component) => class Accord extends React.Component {
    constructor() {
        super();
        this.state = {
            openArticleId: null,
        };
    }


    openArticle = id => this.state.openArticleId === id;

    toggleOpen = id =>ev =>this.setState({
        openArticleId: this.openArticle(id) ? null: id
    });

    render() {
        return <Component {...this.props} toggleOpen={this.toggleOpen} openArticle={this.openArticle}/>
    }

}
