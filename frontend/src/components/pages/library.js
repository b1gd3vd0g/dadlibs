import { createContext, useState } from 'react';

const LibraryContext = createContext([]);

const Library = () => {
  const [library, setLibrary] = useState([]);

  return (
    <LibraryContext.Provider value={{ library, setLibrary }}>
      <div className='Library'>
        <h1>Template Library</h1>
      </div>
    </LibraryContext.Provider>
  );
};

export default Library;
