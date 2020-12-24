async function createDataFetcher(fetchData, setState, setLoadingData) {
  const data = await fetchData();
  setState(data);
  setLoadingData(false);
}
