import React, {Component, PropTypes} from 'react'
import ArticleList from './ArticleList'
import Select from 'react-select'
import Range from "./DayPicker";
import 'react-select/dist/react-select.css'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    state = {
        selected: null,
    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }));
        return (
            <div>
                <Range/>
                <ArticleList articles={this.props.articles}/>
                <Select options={options} value={this.state.selected} onChange={this.handleChange} multi={true}/>
            </div>
        )
    }

    handleChange = selected => this.setState({selected})
}

export default App