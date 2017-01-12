import React, { Component } from 'react';
import './App.css';
import StartAward from './components/StartAward';
import People from './components/People';
import inboxListItems from './components/constants/inboxListItems';
import inboxListItemOutlines from './components/constants/inboxListItemOutlines';

import NavigationDrawer from 'react-md/lib/NavigationDrawers';

import { connect } from 'react-redux';

let navItems = inboxListItems.map(item => {
  if (!item.divider) {
    item.onClick = () => this._setPage(item.key);
  }
  return item;
});

let navItemOutlines = inboxListItemOutlines.map(item => {
  if (!item.divider) {
    item.onClick = () => this._setPage(item.key);
  }
  return item;
});

class App extends Component {

  render() {
    if(this.props.award.awardNumber) {
      return (
        <div className="App">
          <NavigationDrawer
            drawerTitle="Kuali Research"
            toolbarTitle="Award"
            >
          <StartAward award={this.props.award} />
          </NavigationDrawer>
        </div>

      );
    } else {
      return (
        <div className="App">
          <NavigationDrawer
            navItems={navItems}
            contentClassName="md-grid"
            mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
            tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            toolbarTitle="Kuali Research Award"
            toolbarProminentTitle
            contentId="main-content-demo"
            >
          <People award={this.props.award} />
          </NavigationDrawer>

        </div>
      )
    }
}
}

App.propTypes = {
  award: React.PropTypes.object.isRequired,
};

export function mapStateToProps(state) {
  return {
    award: state.award
  };
}

export default connect(mapStateToProps)(App);