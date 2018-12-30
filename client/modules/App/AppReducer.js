const initialState = {
  "routes": [
    {
      "name": "Home",
      "uri": "/",
      "img": ""
    },
    {
      "name": "About me",
      "uri": "/aboutme",
      "img": ""
    },
    {
      "name": "Hire me",
      "uri": "/hireme",
      "img": ""
    }
  ]
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default AppReducer;
