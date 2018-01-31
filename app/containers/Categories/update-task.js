import { connect } from 'react-redux';
import UpdateTask from '../../components/UpdateTask';

export function mapStateToProps(state) {
  return {
    categories: state.get('categories'),
  };
}

export default connect(mapStateToProps)(UpdateTask);
