const initialState = {
  "routes": [
    {
      "name": "Home",
      "uri": "/",
      "icon": "Home"
    },
    {
      "name": "About me",
      "uri": "/aboutme",
      "icon": "CircleInformation"
    },
    {
      "name": "Hire me",
      "uri": "/hireme",
      "icon": "Briefcase"
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
