import { StyledButton } from './StyledButton';

const Button = ({ children, onClick, type, ...allyProps }) => {
  return (
    <StyledButton type={type} onClick={onClick} {...allyProps}>
      {children}
    </StyledButton>
  );
};

export default Button;
