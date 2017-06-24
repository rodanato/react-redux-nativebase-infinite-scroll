
const setCards = (cards) => {
  return {
    type: 'SET_CARDS',
    cards
  }
};

const filterCards = (postsILike) => {
  return {
    type: 'FILTER_CARDS',
    postsILike
  }
};

const updateCard = (cardId, userId) => {
  return {
    type: 'UPDATE_CARD',
    cardId, 
    userId
  }
};

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
};


export { setCards, filterCards, updateCard, setVisibilityFilter };