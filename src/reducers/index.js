export default (state = {}, action) => {
  switch (action.type) {
    case 'MAKE_GREETING_TEXT':
      return {
        ...state,
        greetingText: action.greetingText,
      };
    default:
      return state;
  }
};
