import React, { Component } from 'react';
import axios from 'axios';

import './../App.css';
import AwardDetails from './AwardDetails';
import Button from 'react-md/lib/Buttons/Button';
import Autocomplete from 'react-md/lib/Autocompletes';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import SelectedPerson from './SelectedPerson';
import Tabs from 'react-md/lib/Tabs/Tabs';
import Tab from 'react-md/lib/Tabs/Tab';
import TabsContainer from 'react-md/lib/Tabs/TabsContainer';

import { saveAward, updateAwardValue, savePeople} from './../redux/award';
import { connect } from 'react-redux';
const dateFormat = require('dateformat');
let persons;

class People extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPeople: [],
      persons: []
    }
  }

  selectPerson = (person, index, matches) => {
    console.log('I got ' +  JSON.stringify(person) + 'index is ' + index + 'matches is ' + JSON.stringify(matches));
    let selectedPeople = this.state.selectedPeople;
    selectedPeople.push(matches[index]);
    this.setState({selectedPeople});
  };

  searchPeople = (username) => {
    console.log('Searching people...' + username);
    const config = {
      headers: {
      'Authorization': 'Basic Y3JhcDphZG1pbg==',
      'content-type': 'application/json'
      }
    };

    const self = this;
    axios.get('kc-dev/research-sys/api/v2/persons?username=' + username, config)
      .then(response => {
        console.log('data is ' +  JSON.stringify(response.data));
        self.setState({persons: response.data});
      })
      .catch(error => {
        console.log('something bad happened' + error.message);
      })
    ;
  };

  updatePersonRole = (person, role) => {
      let selectedPersonIndex = this.state.selectedPeople.map((p, index) => {
        if (p.principalId === person.principalId) {
          return index;
        }
      });
      let newPerson = person;
      newPerson.roleCode = role;
      let selectedPeople = this.state.selectedPeople;
      selectedPeople[selectedPersonIndex] = newPerson;
      this.setState({selectedPeople: selectedPeople});
  };

  savePeople = () => {
    this.props.dispatch(savePeople(this.props.award, this.state.selectedPeople));
  };

  render() {
    const self = this;
    const peoples = this.state.selectedPeople.map(person => {
      return <SelectedPerson key={person.principalId} person={person} updatePersonRole={self.updatePersonRole}/>
    });

    return(
      <div className="People">

        <h1>Add contacts</h1>

        <TabsContainer panelClassName="md-grid" colored>
          <Tabs tabId="tab">
            <Tab label="Key Personnel and Credit Split" style={size: 30px}>
              <Autocomplete
                id="person-search"
                type="search"
                label="Type a username"
                className="md-cell"
                placeholder="Person"
                data={this.state.persons}
                dataLabel="principalName"
                filter={null}
                onChange={this.searchPeople}
                clearOnAutocomplete
                onAutocomplete={this.selectPerson}
              />

                    {peoples}
            </Tab>
            <Tab label="Unit Contacts">
            </Tab>
            <Tab label="Sponsor Contacts">
            </Tab>
            <Tab label="Central Admin Contacts">
            </Tab>
          </Tabs>
        </TabsContainer>

        <Button raised primary label="Save People" />

      </div>
    );
  }
}

People.propTypes = {
  award: React.PropTypes.object.isRequired,
};

export function mapStateToProps(state) {
  return {
    award: state.award
  };
}

export default connect(mapStateToProps)(People);
