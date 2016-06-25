import React from 'react';
import ReactDOM from "react-dom";
import Autosuggest from 'react-autosuggest';
import { cities } from './cities-list.js'


function getSuggestions(value) {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : cities.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
}

function getSuggestionValue(suggestion) { // when suggestion selected, this function tells
  return suggestion.name;                 // what should be the value of the input
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

export default class SearchSuggest extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: getSuggestions('')
    };

    this.onChange = this.onChange.bind(this);
    this.onSuggestionsUpdateRequested = this.onSuggestionsUpdateRequested.bind(this);
  }

  onChange(event, { newValue }) {
    this.setState({
      value: newValue
    });

    this.props.updateCheck ? this.props.handleSearch(newValue): [];
  }

  onSuggestionsUpdateRequested({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    });
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Enter a city',
      value,
      onChange: this.onChange
    };

    return (
    		<div className="row">
    	        <div className="col offset-s1 s10">
    	          <div className="card white darken-1">
    	            <div className="card-content">
    	              <h2 className="card-title center-align flow-text">Where is your layover?</h2>
    	              <Autosuggest suggestions={suggestions}
    	                           onSuggestionsUpdateRequested={this.onSuggestionsUpdateRequested}
    	                           getSuggestionValue={getSuggestionValue}
    	                           renderSuggestion={renderSuggestion}
    	                           inputProps={inputProps} />
    	            </div>
    	          </div>
    	        </div>
    	    </div>
    );
  }
}