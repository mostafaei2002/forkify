import { TIMEOUT_SEC } from './config';

const timeout = function (s) {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error(`Request Took too long! Timeout after ${s} seconds`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    // 1. Fetch Data
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);

    // 2. Throw Error on not 200 responses
    if (!res.ok)
      throw new Error(`We could not find that recipe. Please try another one!`);

    // 3. Jsonify response
    const data = await res.json();

    // 4. Return data
    return data;
  } catch (err) {
    throw err;
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const fetchUplaod = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });

    const res = await Promise.race([fetchUplaod, timeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${data.status})`);

    return data;
  } catch (err) {
    throw err;
  }
};
