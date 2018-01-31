import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Category from '../../containers/Categories/category';
import { pushPopCategoryInFiltr } from './actions';


function mapStateToProps(state) {
  return {
    filterCategory: state.get('filterCategories'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pushPopCategoryInFiltr: bindActionCreators(pushPopCategoryInFiltr, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);

