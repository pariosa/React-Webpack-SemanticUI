import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMaxHp, updateCurrentHp, updateNonLethal, updateInitiativeMod, updateDr} from './js/actions/hpActions'

const MapStateToProps = (state) =>{ 
	return{
		max: state.action.character.health.max,
		current:state.action.character.health.current,
		nonLethal:state.action.character.health.nonLethal,
		DR: state.action.character.health.DR,
		initiativeModifier:state.action.character.initiativeModifier,
		dexterityMod:state.action.character.stats.dexMod
	}

}

const MapDispatchToProps = (dispatch) =>{
	return{
		updateMaxHp: (maxHp) => dispatch(updateMaxHp(maxHp)),
		updateCurrentHp:(currentHp) => dispatch(updateCurrentHp(currentHp)),
	 	updateNonLethal: (nonLethal) => dispatch(updateNonLethal(nonLethal)),
	  	updateInitiativeMod: (initiativeModifier) => dispatch(updateInitiativeMod(initiativeModifier)),
	  	updateDr: (dr) => dispatch(updateDr(dr))
	}
}

class HealthPoints extends Component{
	render(){
		return (
			<div className="HealthPoints ui four wide">
				<div className="ui labeled button small " tabIndex="0">
				  	<div className="ui black button small">
				   		<strong>Hit Points</strong>
				  	</div>
					<div className="ui three wide left labeled input">
						<div className="ui left corner label">
							total
						</div>
					 	<input size="5" type="text" value={this.props.max} onChange={this.props.updateMaxHp} />
				 	</div>
				 	<div className="input ui three wide left labeled input">
						<div className="ui left corner label">
						DR
						</div>
					 	<input size="13" type="text" value={this.props.DR} onChange={this.props.updateDr} />
				 	</div>
				 	<br/>
				</div>
				<div className="ui form">
				 	<div className="field">
				 	    <label>Wounds/Current HP</label>
    					<textarea rows="1" value={this.props.current} onChange={this.props.updateCurrentHp} >
    					</textarea>
					</div>
				</div>
				<div className="ui form">
				 	<div className="field">
				 	    <label>Nonlethal Damage</label>
    					<textarea value={this.props.nonLethal} onChange={this.props.updateNonLethal} rows="1">
    					</textarea>
					</div>
				</div>
				<div className=" ui labeled button small" tabIndex="0">
				  	<div className="ui black button small">
				   		<strong>Initiative</strong>
				  	</div>
					<div className="input ui three wide left labeled input">
						<div className="ui left corner label">
							total
						</div>
					 	<input size="4" type="text" value={parseInt(this.props.dexterityMod) + parseInt(this.props.initiativeModifier)} />
				 	</div>
				 	=
				 	<div className="ui three wide left labeled input">
						<div className="ui left corner label">
						Dex mod
						</div>
					 	<input size="4" type="text" value={this.props.dexterityMod} />
				 	</div> 
					+
				 	<div className="input ui three wide left labeled input">
						<div className="ui left corner label">
						Misc mod
						</div>
					 	<input size="4" type="text" value={this.props.initiativeModifier} onChange={this.props.updateInitiativeMod} />
				 	</div>
				 	<br/>
				</div>
			</div>
		)
	}
}
export default connect(MapStateToProps, MapDispatchToProps) (HealthPoints);