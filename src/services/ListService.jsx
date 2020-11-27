export const addToList = (sentence) => {
  let array = [];
  if (window.localStorage.getItem('translationList') != null) {
    array = JSON.parse(window.localStorage.getItem('translationList'));
    if (array.length === 10) {
      array.shift();
    }
  }
  array.push(sentence);
  window.localStorage.setItem('translationList', JSON.stringify(array));
};

export const getList = () => {
  if (window.localStorage.getItem('translationList') != null) {
    return JSON.parse(window.localStorage.getItem('translationList'));
  } else {
    return [];
  }
};
export const clearList = () => {
  window.localStorage.removeItem('translationList');
};
