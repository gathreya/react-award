import React from 'react';
import SelectField from 'react-md/lib/SelectFields';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import SelectFieldColumn from 'react-md/lib/DataTables/SelectFieldColumn';

import personRoles from './constants/PersonRoles';
const personRoleItems = personRoles;

export default class SelectedPerson extends React.Component {

  render() {
    return (
      <TableRow>
        <TableColumn>{this.props.person.principalName}</TableColumn>
        <TableColumn>00001</TableColumn>
        <TableColumn>kc@gmail.com</TableColumn>
        <TableColumn>702-349-8675</TableColumn>
        <TableColumn>
        <SelectField
          id="roles"
          menuItems={personRoleItems}
          inputStyle={{width: '100px'}}
          listStyle={{width: '100px'}}
          regularStyle={{width: '100px'}}
          stretchList={false}
          required
          onChange={this.props.updatePersonRole.bind(null, this.props.person)}
          />
          </TableColumn>
      </TableRow>
    )
  }
}