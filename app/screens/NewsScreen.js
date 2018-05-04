"use strict";

import _ from "underscore";
import React from "react";
import {connect} from "react-redux";
import {newsFetch} from "../modules/News/actions";
import NewsList from "../components/NewsList";
import ScreenLayout from "../components/ScreenLayout";
import {Text} from "native-base";


class NewsScreen extends React.Component {
	static navigationOptions = {
		title: 'Новости'
	};

	componentDidMount(){
		this.props.newsFetch();
	}

	render(){
		// Item is loaded
		if(! _.isEmpty(this.props.pickedItem) ){
			return (
				<ScreenLayout>
					<NewsItem data={this.props.pickedItem}/>
				</ScreenLayout>
			);
		}
		// Item is picked
		else if(! _.isNull(this.props.pickedItemIndex) ){
			return (
				<ScreenLayout loading={this.props.fetching} />
			);
		}
		// Show the list if loaded already
		 else if (!_.isEmpty(this.props.collection)) {
			return (
				<ScreenLayout>
					<NewsList collection={this.props.collection}/>
				</ScreenLayout>
			);
		}
		// Show the loading
		 else if (this.props.fetching) {
			return (
				<ScreenLayout loading={this.props.fetching} />
			);
		}
		// Else
		else {

			return (
				<ScreenLayout>
					<Text>Эм...</Text>
				</ScreenLayout>
			);
		}
	}
}

export default connect(
	state => ({
		news : state.news
	}),
	dispatch => ({
        newsFetch : () => dispatch(newsFetch())
	}),
)(NewsScreen);
