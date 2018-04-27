"use strict";

import { createStore } from 'redux';
import reducers from '../reducers';
import middleware from '../middleware';

/**
 * Хранилище данных приложения
 * @type {object}
 */
const store = createStore(reducers, {}, middleware);

// подписываемся на все события и выводим изменения в лог
store.subscribe(() => {
	console.log('Store changed', store.getState());
});

export default store;