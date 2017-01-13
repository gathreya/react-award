import React, { Component } from 'react';
import './App.css';
import StartAward from './components/StartAward';
import Summary from './components/Summary';

import People from './components/People';
import inboxListItems from './components/constants/inboxListItems';
import inboxListItemOutlines from './components/constants/inboxListItemOutlines';

import NavigationDrawer from 'react-md/lib/NavigationDrawers';

import { connect } from 'react-redux';
let navItems;
let navItemOutlines;

/*let navItemOutlines = inboxListItemOutlines.map(item => {
  if (!item.divider) {
    item.onClick = () => this._setPage(item.key);
  }
  return item;
});*/

class App extends Component {


  constructor(props) {
    super(props);
    this.navItems = inboxListItems.map(item => {
        item.onClick = () => this.setPage(item.key);
      return item;
    });

    this.navItemOutlines = inboxListItemOutlines.map(item => {
      if (!item.divider) {
        item.onClick = () => this._setPage(item.key);
      }
      return item;
    });
  }

  setPage(key) {
    console.log('clicked ' + key);
    this.setState({ page: key });
  }

  render() {
    if(this.state && this.state.page === "summary") {
      return(
        <div className="App">
          <NavigationDrawer
            navItems={this.navItems}
            contentClassName="md-grid"
            mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
            tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
            toolbarTitle="Kuali Research Award"
            toolbarProminentTitle
            contentId="main-content-demo"
            >
            <Summary award={this.props.award}/>
          </NavigationDrawer>

        </div>
      )
    }

    else if(!this.props.award.awardNumber) {
      return (
        <div className="App">
          <NavigationDrawer
            drawerTitle="Kuali Research"
            toolbarTitle="Award"
            navItems={this.navItemOutlines}
            >
          <StartAward award={this.props.award} />
          </NavigationDrawer>
        </div>

      );
    } else {
      return (
        <div className="App">
          <NavigationDrawer
            navItems={this.navItems}
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