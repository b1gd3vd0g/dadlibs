import { Link } from 'react-router-dom';

const FourOhFour = () => {
  return (
    <div className='FourOhFour'>
      <h1>
        <b>404: </b>File not found.
      </h1>
      <Link to='/'>Return to home page.</Link>
    </div>
  );
};

export default FourOhFour;
