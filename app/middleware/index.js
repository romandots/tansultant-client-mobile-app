"use strict";

import {applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

export default applyMiddleware(createLogger(), promise(), thunk);