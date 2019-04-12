export const makeGreetingText = userName => ({
  type: 'MAKE_GREETING_TEXT',
  greetingText: `Hello, ${userName}!`
});
