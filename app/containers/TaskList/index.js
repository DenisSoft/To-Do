import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskList from '../../components/TaskList';
import { addTask, deleteTask, changeStatus, updateTask } from './actions';

export function mapStateToProps(state, props) {
  const filterTasks = state.get('filterTasks');
  return {
    tasks: state.get('tasks').filter((task) =>(
      (task.idCategory === Number(props.idCategory)) &&
      (filterTasks.isDone ? task.isDone === true : true) &&
      (filterTasks.title ? (task.title.indexOf(filterTasks.title) + 1) : true))
    ),
    //   &&
    //   filterTasks.isDone ? task.isDone === true : true
    // ),
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

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);

