import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UpdateTask from '../../containers/Categories/update-task';
import { updateTask } from './actions';

export function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    updateTask: bindActionCreators(updateTask, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTask);
