import { Link } from 'react-router-dom';

const LargeButton = ({ children, onClick }) => {
  return (
    <button
      className='large'
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const LargeLinkButton = ({ children, to }) => {
  return (
    <Link to={to}>
      <button className='large'>{children}</button>
    </Link>
  );
};

export { LargeButton, LargeLinkButton };
