import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';

export default [{
  key: 'home',
  primaryText: 'home',
  leftIcon: <FontIcon>home</FontIcon>,
  active: true,
}, {
  key: 'contacts',
  primaryText: 'Contacts',
  leftIcon: <FontIcon>contacts</FontIcon>,
}, {
  key: 'budget',
  primaryText: 'Budget',
  leftIcon: <FontIcon>account_balance_wallet</FontIcon>,
}, {
  key: 'payment',
  primaryText: 'Payment',
  leftIcon: <FontIcon>payment</FontIcon>,
}, {
  key: 'commitments',
  primaryText: 'Commitments',
  leftIcon: <FontIcon>layers</FontIcon>,
},
  {
  key: 'special-review',
  primaryText: 'Special Review',
  leftIcon: <FontIcon>pets</FontIcon>,
}, {
  key: 'notes',
  primaryText: 'Notes and Attachments',
  leftIcon: <FontIcon>attachment</FontIcon>,
}, {
  key: 'customData',
  primaryText: 'Custom Data',
  leftIcon: <FontIcon>folder</FontIcon>,
}, {
    key: 'summary',
    primaryText: 'Summary',
    leftIcon: <FontIcon>format_list_bulleted</FontIcon>,
}];
