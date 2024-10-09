import { createContext, useEffect, useState } from 'react';
import { readTemplates } from '../../api_calls/template_crud';
import { FormGroup, LargeLinkButton, LinkButton } from '../reusable';

import './library.css';

const SearchContext = createContext({});

const Library = () => {
  const [library, setLibrary] = useState([]);

  const [search, setSearch] = useState(null);

  // This useEffect is called whenever search is changed.
  // It will set the library with new results based on a new search query.
  useEffect(() => {
    // If you are just opening this page, do not search whatsoever.
    if (search === null) return;

    // This function is called when search is updated.
    // We must as
    (async () => {
      const [status, body] = await readTemplates(search);
      switch (status) {
        case 200:
          // Success!
          setLibrary(body);
          break;
      }
    })();
  }, [search]);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      <div className='Library'>
        <LinkButton to='/'>Back home</LinkButton>
        <LibrarySearchBar />
      </div>
    </SearchContext.Provider>
  );
};

const LibrarySearchBar = () => {
  return (
    <div className='LibrarySearchBar'>
      <h2>Search Dad Libs</h2>
      <FormGroup
        label='Title'
        id='title'
      />
      <FormGroup
        label='Author'
        id='author'
      />
      <TagChooser />
      <SearchButton />
    </div>
  );
};

const TagChooser = () => {
  const [tags, setTags] = useState([]);

  return (
    <div className='TagChooser'>
      <h4>Tags: </h4>
      <input
        type='text'
        placeholder='Search tags'
      />
      <div>FUNNY</div>
      <div>SEXY</div>
      <div>GROSS</div>
      <div>EXPLICIT</div>
      <div>KID FRIENDLY</div>
    </div>
  );
};

const TagTile = () => {};

const SearchButton = () => {
  return <button className='SearchButton'>Search</button>;
};

export default Library;
