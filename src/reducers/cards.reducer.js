
const card = (state = {}, action) => {
  switch (action.type) {
    case 'FILTER_CARDS':
      return action.postsILike.includes(state._id);
    case 'UPDATE_CARD':
      if (state._id !== action.cardId) {
        return state;
      }

      let likes = state.likes;
      if (likes.includes(action.userId)) {
        likes = likes.filter(like => like !== action.userId);
      } else {
        likes.push(action.userId); 
      }

      return Object.assign({...state}, {
        likes
      });
    default:
      return state;
  }
};

const cards = (state = [], action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return action.cards;
    case 'UPDATE_CARD':
      return state.map(
        (c) => card(c, action)
      );
    case 'FILTER_CARDS':
      return state.filter(
        (c) => {
          card(c, action)
          alert(card(c, action))
        }
      );
    default:
      return state;
  }
};

export default cards;