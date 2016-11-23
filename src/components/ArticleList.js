import React, {Component}  from 'react'
import Article from './Article'
import toggleOpen from '../decorators/toggleOpen'

class ArticleList extends Component {
    state = {
        openArticleId: null
    };

    render() {
        const {articles, openArticleId} = this.props;

        const articleItems = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id == this.openArticleId}
                    toggleOpen={this.openArticle(article.id)}
                />
            </li>
        ));

        return (
            <div>
                <ul>
                    {articleItems}
                </ul>
            </div>
        )
    }

    openArticle = id => ev => {
        this.setState({
            openArticleId: this.state.openArticleId === id ? null : id
        })
    }
}

export default ArticleList