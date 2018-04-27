"use strict";

import {HomeScreen} from "./HomeScreen";
import {DetailsScreen} from "./DetailsScreen";

import {LoginScreen} from "./LoginScreen";
import {RegisterScreen} from "./RegisterScreen";
import {SettingsScreen} from "./SettingsScreen";
import {ProfileScreen} from "./ProfileScreen";

import {PassesScreen} from "./PassesScreen";
import {PassViewScreen} from "./PassViewScreen";
import {PassPausedSuccessScreen} from "./PassPausedSuccessScreen";
import {PassPausedErrorScreen} from "./PassPausedErrorScreen";

import {VisitsScreen} from "./VisitsScreen";
import {LessonViewScreen} from "./LessonViewScreen";
import {ReviewsScreen} from "./ReviewsScreen";

import {BonusesScreen} from "./BonusesScreen";
import {MyPromocodeScreen} from "./MyPromocodeScreen";

import {NewsScreen} from "./NewsScreen";

import {EventsScreen} from "./EventsScreen";
import {EventViewScreen} from "./EventViewScreen";

import {PromotionsScreen} from "./PromotionsScreen";
import {PromotionViewScreen} from "./PromotionViewScreen";
import {PromocodeActivationScreen} from "./PromocodeActivationScreen";
import {PromocodeActivatedScreen} from "./PromocodeActivatedScreen";
import {StackNavigator} from "react-navigation";

const RootStack = StackNavigator({
		Home               : {
			screen: HomeScreen
		},
		Details            : {
			screen: DetailsScreen
		},
		Login              : {
			screen: LoginScreen
		},
		Register           : {
			screen: RegisterScreen
		},
		Settings           : {
			screen: SettingsScreen
		},
		Profile            : {
			screen: ProfileScreen
		},
		Passes             : {
			screen: PassesScreen
		},
		PassView           : {
			screen: PassViewScreen
		},
		PassPausedSuccess  : {
			screen: PassPausedSuccessScreen
		},
		PassPausedError    : {
			screen: PassPausedErrorScreen
		},
		Visits             : {
			screen: VisitsScreen
		},
		LessonView         : {
			screen: LessonViewScreen
		},
		Reviews            : {
			screen: ReviewsScreen
		},
		Bonuses            : {
			screen: BonusesScreen
		},
		MyPromocode        : {
			screen: MyPromocodeScreen
		},
		News               : {
			screen: NewsScreen
		},
		Events             : {
			screen: EventsScreen
		},
		EventView          : {
			screen: EventViewScreen
		},
		Promotions         : {
			screen: PromotionsScreen
		},
		PromotionView      : {
			screen: PromotionViewScreen
		},
		PromocodeActivation: {
			screen: PromocodeActivationScreen
		},
		PromocodeActivated : {
			screen: PromocodeActivatedScreen
		}
	},
	{
		initialRouteName: "Home"
	}
);

export default RootStack;