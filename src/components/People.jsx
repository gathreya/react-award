import React, { Component } from 'react';
import axios from 'axios';

import './../App.css';
import Autocomplete from 'react-md/lib/Autocompletes';
import SelectedPerson from './SelectedPerson';
import AddedPeople from './AddedPeople';

import Tabs from 'react-md/lib/Tabs/Tabs';
import Tab from 'react-md/lib/Tabs/Tab';
import TabsContainer from 'react-md/lib/Tabs/TabsContainer';
import BottomNavigation from 'react-md/lib/BottomNavigations';

import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import SelectFieldColumn from 'react-md/lib/DataTables/SelectFieldColumn';

import {savePeople} from './../redux/award';
import { connect } from 'react-redux';

const links = [{
    label: 'Previous',
    iconChildren: 'chevron_left',
},
  {
  label: 'Save',
  iconChildren: 'check',
}, {
  label: 'Next',
  iconChildren: 'chevron_right',
}];

class People extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPeople: [],
      persons: []
    }
  }

  selectPerson = (person, index, matches) => {
    let selectedPeople = this.state.selectedPeople;
    selectedPeople.push(matches[index]);
    this.setState({selectedPeople});
  };

  searchPeople = (username) => {
    const config = {
      headers: {
      'Authorization': 'Basic Y3JhcDphZG1pbg==',
      'content-type': 'application/json'
      }
    };

    const self = this;
    axios.get('kc-dev/research-sys/api/v2/persons?username=' + username, config)
      .then(response => {
        self.setState({persons: response.data});
      })
      .catch(error => {
        console.log('something bad happened' + error.message);
      })
    ;
  };

  // role is sent as an argument by the onChange event on the select component
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
    console.log('Saving people.....' + this.props.award + 'people is ' + this.state.selectedPeople);
    this.props.dispatch(savePeople(this.props.award, this.state.selectedPeople));
    this.state.selectedPeople=[];
  };

  doAction = (newActiveIndex, event) => {
    this.savePeople();
  }

  render() {
    const self = this;
    const peoples = this.state.selectedPeople.map(person => {
      return <SelectedPerson key={person.principalId} person={person} updatePersonRole={self.updatePersonRole}/>
    });

    return(
      <div className="People">

        <h1>Contacts</h1>

        <TabsContainer colored style={{marginBottom: '56px'}}>
          <Tabs tabId="tab">
            <Tab label="Key Personnel and Credit Split">

              <Autocomplete
                id="person-search"
                type="search"
                label="Type a username"
                placeholder="Person"
                data={this.state.persons}
                dataLabel="principalName"
                filter={null}
                onChange={this.searchPeople}
                clearOnAutocomplete
                onAutocomplete={this.selectPerson}
                />
              <DataTable plain responsive={false}>
                <TableHeader>
                  <TableRow>
                    <TableColumn>Person username</TableColumn>
                    <TableColumn >Unit</TableColumn>
                    <TableColumn>Email</TableColumn>
                    <TableColumn>Phone</TableColumn>
                    <TableColumn>Role</TableColumn>
                  </TableRow>
                </TableHeader>
                {peoples}
              </DataTable>
              <AddedPeople key="addedPerson" persons={this.props.award.projectPersons} />
            </Tab>
            <Tab label="Unit Contacts">
            </Tab>
            <Tab label="Sponsor Contacts">
            </Tab>
            <Tab label="Central Admin Contacts">
            </Tab>
          </Tabs>
        </TabsContainer>


       <BottomNavigation
          links={links}
          dynamic={false}
          onNavChange={this.doAction}
          />

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
