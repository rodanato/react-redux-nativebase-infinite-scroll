import { connect } from 'react-redux'
import { setCards, filterCards, updateCard } from '../actions'
import PostsILike from '../components/posts-i-like.component'

// const getVisibleTodos = (todos, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return todos;
//     case 'SHOW_COMPLETED':
//       return todos.filter(t => t.completed);
//     case 'SHOW_ACTIVE':
//       return todos.filter(t => !t.completed);
//     default:
//       return todos;
//   }
// };

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    filterCards: (list) => {
      dispatch(filterCards(list))
    },
    onSetCards: (cards) => {
      dispatch(setCards(cards))
    },
    onUpdateCard: (cardId, userId) => {
      dispatch(updateCard(cardId, userId))
    }
  }
};

const VisiblePostsILike = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsILike);

export default VisiblePostsILike