import { createContext, useEffect, useState } from 'react';
import { readTemplates } from '../../api_calls/template_crud';
import { LargeLinkButton } from '../reusable';

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
        <LargeLinkButton to='/'>Back home</LargeLinkButton>
        <h1>Template Library</h1>
        <LibrarySearchBar />
      </div>
    </SearchContext.Provider>
  );
};

const LibrarySearchBar = () => {
  return (
    <div className='LibrarySearchBar'>
      <h4>Title: </h4>
      <input type='text' />
      <h4>Author: </h4>
      <input type='text' />
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
