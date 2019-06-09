import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import * as API from '../api';
import { actionTypes, actionCreators } from './actions';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchTodosSaga(action) {
  try {
    const todos = yield call(API.fetchTodos);
    yield put(actionCreators.todosSuccess(todos.data));
  } catch (e) {
    yield put(actionCreators.todosFail(e.message));
  }
}

function* mySaga() {
  yield takeLatest(actionTypes.TODOS_FETCH_REQUESTED, fetchTodosSaga);
}

export default mySaga;
