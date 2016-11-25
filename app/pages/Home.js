import React from 'react';
import classNames from 'classnames'

import styles from './_Home.scss';
import Menu from '../components/Menu/Menu';
import MenuStore from '../stores/MenuStore';
import AppStore from '../stores/AppStore';

export default class Home extends React.Component {

  componentWillMount() {
    document.title = "Kansas City Cocktail Club";
    AppStore.setProps({tone:'dark'});
    MenuStore.setProps({title:'Discover'});
    AppStore.setProps({backgroundImage:'url(http://localhost:8000/images/hero-bg.png)'});
    AppStore.setProps({backgroundSize:'cover'});
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <Menu
          title={MenuStore.getProp('title')}
          tone={AppStore.getProp('tone')}
          active={MenuStore.getProp('active')}
        />
        <div className={classNames(styles.body, styles.home)}>
          <div className={classNames(styles.logoWrapper)}>
            <img className={styles.homeLogo} src="./images/home-logo.png" />
          </div>
        </div>
      </div>
    );
  }
}
