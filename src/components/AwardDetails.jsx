import React, { PureComponent } from 'react';


export default class AwardDetails extends PureComponent {


  render() {
    return(
      <div>
              <div>Account Number: {this.props.award.accountNumber ? this.props.award.accountNumber: ''}</div>>
              <div>Doc # : {this.props.award.docNbr}</div>
              <div>PI: </div>
              <div>Lead Unit: {this.props.award.unitNumber}</div>
              <div>Sponsor: {this.props.award.sponsor ? this.props.award.sponsor.sponsorName : ''}</div>

      </div>
    );
  }
}