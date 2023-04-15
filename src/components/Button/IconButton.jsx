import css from './IconButton.module.css';
import clsx from 'clsx';
const IconButton = ({
  children,
  onClick,
  type,
  addContactButton,
  searchButton,
  sortButton,
  closeModalButton,
  ...allyProps
}) => {
  return (
    <button
      className={clsx(css.button, {
        [css.addContactButton]: addContactButton,
        [css.searchButton]: searchButton,
        [css.sortButton]: sortButton,
        [css.closeModalButton]: closeModalButton,
      })}
      type={type}
      onClick={onClick}
      {...allyProps}
    >
      {children}
    </button>
  );
};

export default IconButton;
