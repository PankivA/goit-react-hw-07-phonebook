import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.value);

  const updateFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };
      return (
    <div className={css.filter}>
    <label className={css.label}>Filter by name</label>
    <input 
    className={css.input} 
    type="text" 
    name="filter" 
    onChange={updateFilter}
    value={filter}
    />
    </div>
)}


export default Filter