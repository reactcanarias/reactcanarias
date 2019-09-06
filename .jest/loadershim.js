import registerRequireContextHook from 'babel-plugin-require-context-hook/register';
registerRequireContextHook();

global.___loader = {
  enqueue: jest.fn(),
}
