const DATAS_PIRATE_URL = 'http://localhost:3000/pirates';

export const searchData = async (search) => {
  try {
    const response = await fetch(`${DATAS_PIRATE_URL}?q=${search ? search : ''}`, { method: 'GET' });
    const datas = await response.json();
    return datas;
  } catch (error) {
    console.log("Error:::", error);
  }
}