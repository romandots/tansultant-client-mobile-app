"use strict";
import _ from "underscore";
import React, {Component} from "react";
import NewsEntry from "./NewsEntry";
import {connect} from "react-redux";
import {newsLoad} from "../modules/News/actions";

class NewsList extends Component {

	constructor(props){
		super(props);
		this.props = props;
		this.list = props.collection;
	}

	pickOne(data){
		console.log('data', data);
		
		this.props.newsLoad(data);
	}

	render(){
		return this.list.length ? this.list.map(entry => <NewsEntry key={entry} data={entry} onPress={() => this.pickOne(entry)}/>) : null;
	}
}
export default connect( state =>({
	news : state.news
}), dispatch => ({
    newsLoad : (index) => dispatch(newsLoad(index))
}))(NewsList);