import { combineReducers } from 'redux';
import cards from './cards.reducer';
import visibilityFilter from './visibility-filter.reducer';

const reducer = combineReducers({
  cards,
  visibilityFilter
});

export default reducer;