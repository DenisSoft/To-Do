import { connect } from 'react-redux';
import Progress from '../../components/Progress';

export function mapStateToProps(state) {
  const totalNumberTasks= state.get('tasks').length;
  const numberCompletedTasks = state.get('tasks').filter((task) => task.isDone === true).length;
  return {
    progress: 100 / totalNumberTasks * numberCompletedTasks
};
}

export default connect(mapStateToProps)(Progress);
