import { getStoreFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setfilter } from '../../redux/filterSlice';
// фільтер бере своє значення з store і на події onChange відправляє action
// який обробляє filterReducer і перезаписує
// значення фільтру в store

import css from './Filter.module.css';
import clsx from 'clsx';

export const Filter = ({ activeFilter }) => {
  const filterValue = useSelector(getStoreFilter);
  const dispatch = useDispatch();
  const handelFilterChange = filterValue => {
    console.log(filterValue);

    dispatch(setfilter(filterValue));
  };

  return (
    <input
      className={clsx(css.filter, {
        [css.activeFilter]: activeFilter,
      })}
      type="text"
      value={filterValue}
      placeholder="find contact"
      onChange={event =>
        handelFilterChange(event.currentTarget.value.toLowerCase())
      }
    />
  );
};
