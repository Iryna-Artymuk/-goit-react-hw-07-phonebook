// import { getStoreFilter } from '../../redux/selectors';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setfilter } from '../../redux/filterSlice';
import { StyledFilter } from './StyledFilter';
// фільтер бере своє значення з store і на події onChange відправляє action
// який обробляє filterReducer і перезаписує
// значення фільтру в store

export const Filter = () => {
  // const filterValue = useSelector(getStoreFilter);
  const dispatch = useDispatch();
  const handelFilterChange = event => {
    dispatch(setfilter(event.currentTarget.value.toLowerCase()));
  };

  return (
    <StyledFilter
      type="text"
      //   value={filterValue}
      placeholder="type contact name"
      onChange={handelFilterChange}
      autoFocus
    />
  );
};
