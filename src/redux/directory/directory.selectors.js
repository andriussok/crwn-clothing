import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorSelections = createSelector(
  [selectDirectory],
  directory => directory.sections
) 