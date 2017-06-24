import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import TodoLinks from '../components/links.component'

const mapStateToProps = (state) => {
  return {
    active: state.visibilityFilter
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (filter) => {
      dispatch(setVisibilityFilter(filter))
    }
  }
};

const VisibleTodoLinks = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoLinks);

export default VisibleTodoLinks