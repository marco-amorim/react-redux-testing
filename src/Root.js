import React from 'react';
import { Provider } from 'react-redux';
import reducers from 'reducers';
import { createStore } from 'redux';

const Root = (props) => {
	return (
		<Provider store={createStore(reducers, {})}>{props.children}</Provider>
	);
};

export default Root;
