async function createDataFetcher(fetchData, setState, setLoadingData) {
  const data = await fetchData();
  setState(data);
  setLoadingData(false);
}

// const getUsers =(id) => {
//   setUsers( )
// }

export { createDataFetcher };
