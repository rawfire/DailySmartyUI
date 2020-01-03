import React, { Component } from "react";
import { Field, reduxForm} from "redux-form";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {

    handleFormSubmit = function({query}) {
        console.log("submit", query);
        //  navigate to a new route
        this.props.history.push("/results");
    }

    renderInput(field) {
        return <input type="text" placeholder="And here We Go" {...field.input} />
    }

    render() {

        const { handleSubmit } = this.props; 

        return (
            <form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <Field name="query" component={this.renderInput} />
            </form>
        )
    }
}
SearchBar = reduxForm({
    form: "searchBar"
})(SearchBar);

SearchBar = withRouter(SearchBar)

export default SearchBar