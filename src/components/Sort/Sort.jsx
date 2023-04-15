import Select from 'react-select';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { sortAtoZ } from '../../redux/contactsListSlice';
import { sortZtoA } from '../../redux/contactsListSlice';

import css from './Sort.module.css';
import clsx from 'clsx';
// export function Sort({ activeSort }) {
//   const dispatch = useDispatch();
//   const handelSelect = event => {
//     console.log(event.target.value === 'AtoZ');
//     event.target.value === 'AtoZ' ? dispatch(sortAtoZ()) : dispatch(sortZtoA());
//   };

//   return (
//     <div
//       className={clsx(css.sortWrapper, {
//         [css.activeSort]: activeSort,
//       })}
//     >
//       <label htmlFor="sortByName" className={css.sortLabel}>
//         sort by name{' '}
//       </label>
//       <select
//         className={css.sort}
//         name="sortByName"
//         onChange={handelSelect}
//         id="sortByName"
//       >
//         <option></option>
//         <option value="AtoZ">A to Z</option>
//         <option value="ZtoA">Z to A</option>
//       </select>
//     </div>
//   );
// }
const options = [
  { value: 'AtoZ', label: 'AtoZ' },
  { value: 'ZtoA', label: 'ZtoA' },
];

export function Sort({ activeSort }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const dispatch = useDispatch();
  // console.log(selectedOption);
  useEffect(() => {
    selectedOption?.value === 'AtoZ'
      ? dispatch(sortAtoZ())
      : dispatch(sortZtoA());
  }, [selectedOption, dispatch]);
  return (
    <div
      className={clsx(css.sortWrapper, {
        [css.activeSort]: activeSort,
      })}
    >
      <Select
        // defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: 'pink',
            primary: '#78788c',
          },
        })}
      />
    </div>
  );
}
