import React, {Component, PropTypes} from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import store from '../store'
import DateRange from './DateRange'
import Counter from './Counter'
import 'react-select/dist/react-select.css'

class App extends Component {

    state = {
        selected: null
    }

    render() {
        const articles_list = store.getState().articles;
        const options = articles_list.map(article => ({
            label: article.title,
            value: article.id
        }))

        return (
            <div>
                <Counter />
                <DateRange />
                <ArticleList />
                <Select options={options} value={this.state.selected} onChange={this.handleChange} multi={true}/>
            </div>
        )
    }

    handleChange = selected => {
        this.setState({selected});
    }
}

export default App