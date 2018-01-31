import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddTask from '../../components/AddTask';
import { addTask } from './actions';

export function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    addTask: bindActionCreators(addTask, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);

