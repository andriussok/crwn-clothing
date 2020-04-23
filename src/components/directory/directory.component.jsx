import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorSelections } from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/menu-item.comopnent';

import './directory.styles.scss';

const Directory = ({ sections }) => (
  <div className='directory-menu'>
    {
      sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorSelections
});

export default connect(mapStateToProps)(Directory);

// again destructuring is the way to minimize repetition
// instead of props