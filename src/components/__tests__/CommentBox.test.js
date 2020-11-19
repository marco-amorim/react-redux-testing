import React from 'react';

import { shallow } from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
	wrapped = shallow(<CommentBox />);
});

afterEach(() => {
	wrapped.unmount();
});

it('has a text area and a button', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
	beforeEach(() => {
		wrapped.find('textarea').simulate('change', {
			target: { value: 'new comment' },
		});

		wrapped.update();
	});
	it('has a text area that users can type in', () => {
		expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
	});

	it('cleans up the text area after form is submitted', () => {
		wrapped.find('form').simulate('submit', {
			preventDefault: () => {},
		});
		wrapped.update();

		expect(wrapped.find('textarea').prop('value')).toEqual('');
	});
});
