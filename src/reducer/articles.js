import { normalizedArticles } from '../fixtures'
import { DELETE_ARTICLE } from '../constants'
import { Map } from 'immutable'

const defaultArticles =  normalizedArticles.reduce((acc, article)=>{
    return acc.set(article.id, article)
}, new Map({}))

export default (articles = defaultArticles, action) => {
    const { type, payload } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.filter(article => article.id != payload.articleId)
    }

    return articles
}