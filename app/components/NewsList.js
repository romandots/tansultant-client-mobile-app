"use strict";
import _ from "underscore";
import React, {Component} from "react";
import NewsEntry from "./NewsEntry";
import {connect} from "react-redux";
import {newsPick} from "../modules/News/actions";

class NewsList extends Component {

	constructor(props){
		super(props);
		this.list = [];
		if(!_.isEmpty(props.collection)){
			for( const index in props.collection ){
				this.list.push(<NewsEntry data={props.collection[index]} onPress={() => this.props.newsPick(index)} />);
			}
		}
	}

	render(){
		if( this.list.length ){
			return this.list;
		} else {
			return '';
		}
	}
}
export default connect(()=>{}, dispatch => ({
    newsPick : () => dispatch(newsPick())
}))(NewsList);