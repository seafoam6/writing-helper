import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import * as API from '../api';
import { actionTypes, actionCreators } from './actions';

function* fetchTodos(): SagaIterator {
  try {
    const response = yield call(API.fetchTodos);
    yield put(actionCreators.todosSuccess(response.data));
  } catch (e) {
    yield put(actionCreators.todosFail(e.message));
  }
}

function* createTodo(action): SagaIterator {
  try {
    const response = yield call(API.createTodo, action.description);
    console.log(actionCreators.todoCreateSuccess(response.data.rows[0]));
    yield put(actionCreators.todoCreateSuccess(response.data.rows[0]));
  } catch (e) {
    yield put(actionCreators.todoCreateFail(e.message));
  }
}

function* sagas() {
  yield all([
    takeLatest(actionTypes.TODOS_FETCH_REQUESTED, fetchTodos),
    takeLatest(actionTypes.TODOS_CREATE_REQUESTED, createTodo)
  ]);
}

export default sagas;
