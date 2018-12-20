import authReducer from './auth';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });

  expect(state).toEqual({});
});

test('should set login', () => {
  const uid = '123abc';

  const action = {
    type: 'LOGIN',
    uid,
  };

  const state = authReducer(undefined, action);

  expect(state).toEqual({ uid });
});

test('should set logout', () => {
  const action = {
    type: 'LOGOUT',
  };

  const state = authReducer({ uid: 'abc123' }, action);

  expect(state).toEqual({});
});
