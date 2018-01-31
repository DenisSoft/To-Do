import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addCategory, deleteCategory, updateCategory } from './actions';
import Category from '../../components/Category';
import { mapStateToProps } from './index';

function mapDispatchToProps(dispatch) {
  return {
    addCategory: bindActionCreators(addCategory, dispatch),
    deleteCategory: bindActionCreators(deleteCategory, dispatch),
    updateCategory: bindActionCreators(updateCategory, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
