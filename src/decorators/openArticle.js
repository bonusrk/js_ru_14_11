import React from 'react'

export default (Component) => class openArticle extends React.Component {
    constructor() {
        super();
        this.state = {
            openArticleId: null
        };
    }

    render() {
        return <Component {...this.props} {...this.state} toggleOpen={this.toggleOpen} openArticle={this.openArticle}/>
    }

    openArticle = id => ev => {
        this.setState({
            openArticleId: this.state.openArticleId === id ? null : id
        })
    };

    toggleOpen = ev =>{

    }


}
