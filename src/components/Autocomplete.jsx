import React, { PureComponent } from 'react';

import Autocomplete from 'react-md/lib/Autocompletes';

import programmingLanguages from './constants/programmingLanguages';
import activityTypes from './constants/activityTypes';

export default class MenuAutocomplete extends PureComponent {

render() {
  return(
<div>

    <Autocomplete
  id="programmingLanguages"
  label="Type a lead unit number"
  className="md-cell md-cell--12"
  data={programmingLanguages} />

<Autocomplete
id="programmingLanguages"
label="Type an activity type"
className="md-cell md-cell--12"
data={activityTypes} />
    </div>
);
}
}