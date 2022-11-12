//=============PROMISE==================
// const getApiResources = (url) => {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err));
// };

//=============ASYNC/AWAIT==================
const getApiResources = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }
    return await res.json();
  } catch (error) {
    console.error("Could not fetch.", error.message);
    return false;
  }
};

// (async () => {
//   const body = await getApiResources(`${SWAPI_ROOt}${SWAPI_PEOPLE}`);
//   console.log(body);
// })();

export { getApiResources };
