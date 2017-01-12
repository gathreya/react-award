import React from 'react';
import SelectField from 'react-md/lib/SelectFields';
import TableColumn from 'react-md/lib/DataTables/TableColumn';

import personRoles from './constants/PersonRoles';
const personRoleItems = [''].concat(personRoles);

export default class SelectedPerson extends React.Component {

  render() {
    return (
      <div>
        {this.props.person.principalName}
          <SelectField
          id="roles"
          label="Select a role"
          placeholder="Select a role"
          menuItems={personRoleItems}
          className="md-cell md-cell--5"
          required
          helpOnFocus
          helpText="Select a role"
          onChange={this.props.updatePersonRole.bind(null, this.props.person)}/>

      </div>
    )
  }
}