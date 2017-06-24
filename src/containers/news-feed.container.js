import { connect } from 'react-redux'
import { setCards, updateCard } from '../actions'
import NewsFeed from '../components/news-feed.component'

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCards: (cards) => {
      dispatch(setCards(cards))
    },
    onUpdateCard: (cardId, userId) => {
      dispatch(updateCard(cardId, userId))
    }
  }
};

const VisibleNewsFeed = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewsFeed);

export default VisibleNewsFeed