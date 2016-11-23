import React, {Component}  from 'react'
import Article from './Article'
import accord from '../decorators/accord'
//А проптайпсы?)
class ArticleList extends Component {

    render() {
        const {articles, openArticle, openArticleId} = this.props;

        const articleItems = articles.map(article => (
            <li key={article.id}>
                <Article
                    article={article}
                    isOpen={openArticleId == article.id}
                    toggleOpen={openArticle(article.id)}
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
