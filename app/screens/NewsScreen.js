"use strict";

import _ from "underscore";
import React from "react";
import {connect} from "react-redux";
import {newsFetch} from "../modules/News/actions";
import NewsList from "../components/NewsList";
import ScreenLayout from "../components/Layouts/Screen";
import {Text} from "native-base";


class NewsScreen extends React.Component {
	static navigationOptions = {
		title: 'Новости'
	};

	componentDidMount(){
		this.props.newsFetch();
	}

	render(){
		const news = this.props.news;
		console.log('this.props', this.props);

		// Item is loaded
		if(! _.isEmpty(this.props.pickedItem) ){
			return (
				<ScreenLayout message={news.error || news.message}>
					<NewsItem data={news.pickedItem}/>
				</ScreenLayout>
			);
		}
		// Item is picked
		else if( news.pickedItemIndex ){
			return (
				<ScreenLayout message={news.error || news.message} loading={news.fetching} />
			);
		}
		// Show the list if loaded already
		 else if (news.collection.length) {
			return (
				<ScreenLayout message={news.error || news.message}>
					<NewsList collection={news.collection}/>
				</ScreenLayout>
			);
		}
		// Show the loading
		 else if (news.fetching) {
			return (
				<ScreenLayout message={news.error || news.message} loading={news.fetching} />
			);
		}
		// Else
		else {

			return (
				<ScreenLayout message={news.error || news.message}/>
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
