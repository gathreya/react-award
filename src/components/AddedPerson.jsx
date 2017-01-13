import React from 'react';
import SelectField from 'react-md/lib/SelectFields';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import SelectFieldColumn from 'react-md/lib/DataTables/SelectFieldColumn';

import personRoles from './constants/PersonRoles';
const personRoleItems = personRoles;

export default class AddedPerson extends React.Component {

  render() {

    return (
      <TableRow>
        <TableColumn>{this.props.person.awardContactId}</TableColumn>
        <TableColumn>{this.props.person.personId}</TableColumn>
        <TableColumn>{this.props.person.roleCode}</TableColumn>
        <TableColumn>{this.props.person['kcPerson.emailAddress']}</TableColumn>
        <TableColumn>{this.props.person['kcPerson.phoneNumber']}</TableColumn>
      </TableRow>
    )
  }
}