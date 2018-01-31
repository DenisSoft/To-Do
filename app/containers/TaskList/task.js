import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Task from '../../components/Task';
import { addTask, deleteTask, changeStatus, updateTask } from './actions';

export function mapStateToProps(state) {
  // const filterCategories = state.get('filterCategories');
  return {
    tasks: state.get('tasks'),
    // .filter((category) => filterCategories.includes(category.idParentCategory)),
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addTask: bindActionCreators(addTask, dispatch),
    deleteTask: bindActionCreators(deleteTask, dispatch),
    updateTask: bindActionCreators(updateTask, dispatch),
    changeStatus: bindActionCreators(changeStatus, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
