import React from 'react';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import AddedPerson from './AddedPerson';

export default class AddedPeople extends React.Component {


  render() {

    let selectedPeoples = this.props.persons? this.props.persons.map(person => {
      return <AddedPerson person={person}/>;
    }) : [];

    return (

    <div style={{width: '100%', backgroundColor: '#eee', marginTop: '10px', paddingTop: '20px'}}>
      <h3>Saved people</h3>
      <DataTable plain responsive={false}>
        <TableHeader>
          <TableRow>
            <TableColumn>Award Contact Id</TableColumn>
            <TableColumn>Person Id</TableColumn>
            <TableColumn>Role Code</TableColumn>
            <TableColumn>Email</TableColumn>
            <TableColumn>Phone Number</TableColumn>
          </TableRow>
        </TableHeader>
        {selectedPeoples}
      </DataTable>
      </div>
    )
  }
}