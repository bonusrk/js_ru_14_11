import React, {Component}  from 'react'
import Article from './Article'
import accord from '../decorators/accord'

class ArticleList extends Component {


    render() {
        const {articles, openArticle, toggleOpen} = this.props;

        const articleItems = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={article.id === openArticle(article.id)}
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
export default accord(ArticleList)