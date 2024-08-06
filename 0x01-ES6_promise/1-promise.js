// Export the function for external use
export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const object = {
      status: 200,
      body: 'Success',
    };

    if (boolean === true) {
      resolve(object);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
