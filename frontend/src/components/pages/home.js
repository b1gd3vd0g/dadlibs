import { useContext, useEffect } from 'react';
import { LargeButton, LargeLinkButton } from '../reusable';
import { UserContext } from '../app';

const HomePage = () => {
  const { user, setUser } = useContext(UserContext);

  // There are different buttons visible, depending on whether you are signed
  // in or not.
  let dependentButtons;
  if (user === null) {
    // there is no user signed in.
    dependentButtons = (
      <>
        <LargeLinkButton to='/login'>Log in</LargeLinkButton>
        <LargeLinkButton to='/signup'>Sign up</LargeLinkButton>
      </>
    );
  } else {
    // there is a user signed in!
    dependentButtons = (
      <>
        <LargeLinkButton to='/create'>Create new template</LargeLinkButton>
        <LargeButton
          onClick={() => {
            setUser(null);
          }}
        >
          Sign out
        </LargeButton>
      </>
    );
  }

  return (
    <div className='HomePage'>
      <h1>What would you like to do?</h1>
      <LargeLinkButton to='/library'>Browse template library</LargeLinkButton>
      {dependentButtons}
    </div>
  );
};

export default HomePage;
