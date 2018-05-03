"use strict";

import * as app from './appActions';
import {newsActions} from '../modules/News';
export const ActionCreators = Object.assign({},
	app,
	newsActions
);