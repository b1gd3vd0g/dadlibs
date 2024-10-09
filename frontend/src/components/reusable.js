import { Link } from 'react-router-dom';
import './reusable.css';

const FormGroup = ({ id, label, type = 'text', rows = 1 }) => {
  const inputField =
    rows > 1 ? (
      <textarea
        rows={rows}
        id={id}
        name={id}
      ></textarea>
    ) : (
      <input
        type={type}
        id={id}
        name={id}
      />
    );

  return (
    <div className='FormGroup inline'>
      <label htmlFor={id}>{label}: </label>
      {inputField}
    </div>
  );
};

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

const LinkButton = ({ children, to }) => {
  return (
    <Link to={to}>
      <button>{children}</button>
    </Link>
  );
};

export { FormGroup, LargeButton, LargeLinkButton, LinkButton };
