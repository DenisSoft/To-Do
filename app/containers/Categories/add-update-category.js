import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddAndUpdateCategory from '../../components/AddAndUpdateCategory';
import { addCategory, updateCategory } from './actions';
import { mapStateToProps } from './index';

function mapDispatchToProps(dispatch) {
  return {
    addCategory: bindActionCreators(addCategory, dispatch),
    updateCategory: bindActionCreators(updateCategory, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddAndUpdateCategory);
