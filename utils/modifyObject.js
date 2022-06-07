export const modifyObj = (userData) => {
    let newObj = {};
    for (let key in userData) {
      if (!Array.isArray(userData[key])) {
        newObj[key] = userData[key].value;
      } else {
        newObj[key] = userData[key];
      }
    }
    return newObj;
  };