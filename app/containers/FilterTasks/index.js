import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../../components/Search';
import { updateFilterTasks } from './actions';

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    updateFilterTasks: bindActionCreators(updateFilterTasks, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

