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

function* updateTodo(action): SagaIterator {
  try {
    const response = yield call(API.updateTodo, action.payload);
    // console.log(actionCreators.todoUpdateSuccess(response.data.rows[0]));
    console.log('response in saga', response);
    yield put(actionCreators.todoUpdateSuccess(response.data.rows[0]));
  } catch (e) {
    yield put(actionCreators.todoUpdateFail(e.message));
  }
}

function* deleteTodo(action): SagaIterator {
  try {
    const response = yield call(API.deleteTodo, action.payload);
    // console.log(actionCreators.todoUpdateSuccess(response.data.rows[0]));
    console.log('response in saga', response);
    yield put(actionCreators.todoDeleteSuccess(response));
  } catch (e) {
    yield put(actionCreators.todoDeleteFail(e.message));
  }
}

function* sagas() {
  yield all([
    takeLatest(actionTypes.TODOS_FETCH_REQUESTED, fetchTodos),
    takeLatest(actionTypes.TODOS_CREATE_REQUESTED, createTodo),
    takeLatest(actionTypes.TODOS_UPDATE_REQUESTED, updateTodo),
    takeLatest(actionTypes.TODOS_DELETE_REQUESTED, deleteTodo)
  ]);
}

export default sagas;
