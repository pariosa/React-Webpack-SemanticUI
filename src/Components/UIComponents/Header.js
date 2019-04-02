import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginButton from '../Buttons/LoginButton';
import LogoutButton from '../Buttons/LogoutButton';
import RegisterButton from '../Buttons/RegisterButton';
import DrawerToggle from './DrawerToggle';
import SaveCharacterButton from '../Buttons/SaveCharacterButton';

const mapStateToProps = ( state ) => {
	return {
		auth: state.firebase.auth
	}
}

class Header extends Component {
	render(){
	const link1 = this.props.auth.uid ?  <SaveCharacterButton /> : <LoginButton /> ;
	const link2 = this.props.auth.uid ? <LogoutButton /> :  <RegisterButton />;
	const drawerToggle = this.props.auth.uid ? <DrawerToggle /> : null;
		return(
  <div>
    <div className="ui Header secondary pointing menu">
      <a className="active item">
        <span className="gray">Cha</span>
react
        <span className="gray">er</span>
        {' '}
&nbsp;Sheet 🧙
				  	
      </a> 
      {drawerToggle}
      {link1}
      {link2}
    </div> 
  </div>
		)
	}
}

export default connect(mapStateToProps) (Header);