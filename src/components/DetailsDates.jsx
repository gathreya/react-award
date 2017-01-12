import React, { PureComponent } from 'react';
import TextField from 'react-md/lib/TextFields';
import Autocomplete from 'react-md/lib/Autocompletes';
import SelectField from 'react-md/lib/SelectFields';
import DatePicker from 'react-md/lib/Pickers/DatePickerContainer';

import units from './constants/units';
import activityTypes from './constants/activityTypes';
import transactionTypes from './constants/transactionTypes';
import awardStatuses from './constants/awardStatuses';
import awardTypes from './constants/awardTypes';
import sponsorIds from './constants/sponsorIds';

const transactionTypeItems = [''].concat(transactionTypes);
const awardStatusItems = [''].concat(awardStatuses);
const awardTypeItems = [''].concat(awardTypes);
const sponsorIdItems = [''].concat(sponsorIds);
const activityTypeItems = [''].concat(activityTypes);

export default class DetailsDates extends PureComponent {


  render() {
  return(
  <div>
    <div className="md-grid">
    <TextField
  id="floatingTitle"
  label="Project Title"
  placeholder={this.props.award.title}
  value={this.props.award.title}
  customSize="title"
  size={10}
  required
  className="md-cell md-cell--bottom"
    onChange={this.props.updateTextValue.bind(null, 'title')}
  />

    <TextField
  id="floatingMultiline"
  label="Description"
  lineDirection="right"
  rows={2}
  placeholder={this.props.award.description}
  required
  className="md-cell md-cell--bottom"
 />


<Autocomplete
  id="units"
  label="Type a lead unit number"
  className="md-cell md-cell--5"
  required
  data={units}
  onAutocomplete={this.props.updateAutocompleteValue.bind(null, 'unitNumber')}/>

<SelectField
id="activityTypes"
label="Select an activity type"
placeholder="Select an activity type"
menuItems={activityTypeItems}
itemLabel="name"
itemValue="abbreviation"
className="md-cell md-cell--5"
required
helpOnFocus
helpText="Select an activity type"
onChange={this.props.updateAutocompleteValue.bind(null, 'activityTypeCode')}/>


<SelectField
  id="Transaction Type"
  label="Transaction Type"
  placeholder="Select a transaction type"
  menuItems={transactionTypeItems}
  itemLabel="name"
  itemValue="abbreviation"
  className="md-cell md-cell--5"
  required
  helpOnFocus
  helpText="Select a transaction type"
  onChange={this.props.updateAutocompleteValue.bind(null, 'awardTransactionTypeCode')}/>


<SelectField
  id="Award Status"
  label="Award Status"
  placeholder="Select an award status"
  menuItems={awardStatusItems}
  itemLabel="name"
  itemValue="abbreviation"
  className="md-cell md-cell--5"
  required
  helpOnFocus
  helpText="Select an award status"
  onChange={this.props.updateAutocompleteValue.bind(null, 'statusCode')}/>


<SelectField
  id="Award Type"
  label="Award Type"
  placeholder="Select an award type"
  menuItems={awardTypeItems}
  itemLabel="name"
  itemValue="abbreviation"
  className="md-cell md-cell--5"
  required
  helpOnFocus
  helpText="Select an award type"
  onChange={this.props.updateAutocompleteValue.bind(null, 'awardTypeCode')}/>


    <SelectField
  id="Sponsor Id"
  label="Sponsor Id"
  placeholder="Select a sponsor code"
  menuItems={sponsorIdItems}
  itemLabel="name"
  itemValue="abbreviation"
  className="md-cell md-cell--5"
  required
  helpOnFocus
  helpText="Select a sponsor code"
  onChange={this.props.updateAutocompleteValue.bind(null, 'sponsorCode')}/>


    <DatePicker
  required
  id="startDate"
  label="Select a project start date"
  className="md-cell"
  onChange={this.props.updateDateValue.bind(null, 'awardEffectiveDate')}/>


<DatePicker
  required
  id="startDate"
  label="Select a project end date"
  className="md-cell"
  onChange={this.props.updateDateValue.bind(null, 'projectEndDate')}/>

</div>
  </div>
);
}
}