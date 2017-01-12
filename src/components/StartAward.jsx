import React, { Component } from 'react';
import './../App.css';
import DetailsDates from './DetailsDates';
import Button from 'react-md/lib/Buttons/Button';

import { saveAward, updateAwardValue} from './../redux/award';
import { connect } from 'react-redux';
const dateFormat = require('dateformat');

class StartAward extends Component {


  save = () => {
    this.props.dispatch(saveAward(this.props.award));
  };

  updateTextValue = (key, value, event) => {
    console.log(key + ': ' + value);
    this.props.dispatch(updateAwardValue(key, value))
  };

  updateAutocompleteValue = (key, value, event) => {
    console.log(key + ': ' + value);
    this.props.dispatch(updateAwardValue(key, value))
  };

  updateDateValue = (key, value, event) => {
    console.log(key + ': ' + value);
    const convertedDate = dateFormat(value, "yyyy/dd/mm");
    JSON.stringify('conv date is ' + convertedDate);
    this.props.dispatch(updateAwardValue(key, convertedDate))
  };

  render() {
    return(
      <div className="App">


        <DetailsDates award={this.props.award} updateTextValue={this.updateTextValue}
                      updateAutocompleteValue={this.updateAutocompleteValue}
                      updateDateValue={this.updateDateValue}/>
        <Button raised primary label="Next" iconClassName="fa fa-hand-spock-o" onClick={this.save}/>
      </div>
    );
  }
}

StartAward.propTypes = {
  award: React.PropTypes.object.isRequired,
};

export function mapStateToProps(state) {
  return {
    award: state.award
  };
}

export default connect(mapStateToProps)(StartAward);