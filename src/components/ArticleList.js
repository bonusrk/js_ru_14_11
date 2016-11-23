import React, {Component}  from 'react'
import Article from './Article'
import openArticle from '../decorators/openArticle'

class ArticleList extends Component {


    render() {
        const {articles, openArticleId, toggleOpen} = this.props;

        const articleItems = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openArticleId}
                    toggleOpen={toggleOpen}
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
}
export default openArticle(ArticleList)