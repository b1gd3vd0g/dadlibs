const readTemplates = async (filter) => {
  const response = await fetch('http://localhost:6900', {
    method: 'GET'
  });
  const content = await response.json();
  return [response.status, content];
};

export { readTemplates };
