// 基本型
export const setApp = () => {
  return {
    type: "SET_APP"
  };
};

// 呼叫其他 action 型
export const selectLv1Option = index => async dispatch => {
  await dispatch(setApp(index));
};

// 執行多件 function 型
export const fetchProduct = cbu => async dispatch => {
  fetch(`/shopping/v1/compositions/productDetails/info/${cbu}`, {
    credentials: "include",
    headers: { "content-type": "application/json" },
    mode: "cors"
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    });
};
