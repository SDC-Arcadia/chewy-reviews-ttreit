/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import { mount } from 'enzyme';
import Reviews from '../react-client/src/components/Reviews.jsx';

describe('Review Data', () => {
  it('retrieves product data on componentDidMount()', () => {
    const spy = jest.spyOn(Reviews.prototype, 'getReviewSummary');
    const wrapper = mount(<Reviews />);
    wrapper.update();
    expect(spy).toHaveBeenCalled();
  });
});
