import React from 'react';
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import AddedPerson from './AddedPerson';
import BottomNavigation from 'react-md/lib/BottomNavigations';


const links = [{
  label: 'Submit',
  iconChildren: 'send',
},
  {
    label: 'Cancel',
    iconChildren: 'remove_circle',
  }, {
    label: 'Close',
    iconChildren: 'clear',
  }];

export default class Summary extends React.Component {

  render() {
    let contacts = this.props.award.projectPersons? this.props.award.projectPersons.map(person => {
      return <AddedPerson person={person}/>;
    }) : [];

    return (
      <div>
      <h1>Award # {this.props.award.awardNumber ? this.props.award.awardNumber: ''} </h1>
        <ExpansionList style={{ padding: 16, width: '100%',  marginBottom: '56px'}} >
        <ExpansionPanel label="DETAILS" defaultExpanded={true}>
          <DataTable plain responsive={true}>
            <TableHeader>
              <TableRow>
                <TableColumn>Field</TableColumn>
                <TableColumn>Value</TableColumn>
              </TableRow>
            </TableHeader>
            <TableRow>
              <TableColumn>Title: </TableColumn>
              <TableColumn>{this.props.award.title ? this.props.award.title: ''}</TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>Status: </TableColumn>
              <TableColumn>{this.props.award.awardSequenceStatusResult ? this.props.award.awardSequenceStatusResult: ''}</TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>Activity Type: </TableColumn>
              <TableColumn>{this.props.award.activityTypeCode ? this.props.award.activityTypeCode : ''}</TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>Sponsor Name: </TableColumn>
              <TableColumn>{this.props.award.sponsor ? this.props.award.sponsor.sponsorName : ''}</TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>Unit Number: </TableColumn>
              <TableColumn>{this.props.award.unitNumber ? this.props.award.unitNumber : ''}</TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>Effective Date: </TableColumn>
              <TableColumn>{this.props.award.awardEffectiveDate ? this.props.award.awardEffectiveDate : ''}</TableColumn>
            </TableRow>
            <TableRow>
              <TableColumn>Execution Date: </TableColumn>
              <TableColumn>{this.props.award.awardExecutionDate ? this.props.award.awardExecutionDate : ''}</TableColumn>
            </TableRow>
          </DataTable>

        </ExpansionPanel>

        <ExpansionPanel label="CONTACTS">
          <DataTable plain responsive={true}>
            {contacts}
          </DataTable>

        </ExpansionPanel>
      </ExpansionList>

        <BottomNavigation
          links={links}
          dynamic={false}
          onNavChange={this.doAction}
          />
      </div>
    )
  }
}