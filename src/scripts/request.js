/**
 * Get request with Fetch API
 * @param {string} url the url to be fetched
 * @retuns Promise<any>
 */
export const getData = async url => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('could not fetch data');
  }
  const data = await res.json();
  return data;
};
