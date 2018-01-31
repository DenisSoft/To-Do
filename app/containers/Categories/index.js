import { connect } from 'react-redux';
import CategoryList from '../../components/Categories';

export function mapStateToProps(state) {
  const filterCategories = state.get('filterCategories');
  return {
    categories: state.get('categories').filter((category) => filterCategories.includes(category.idParentCategory)),
  };
}

export default connect(mapStateToProps)(CategoryList);

