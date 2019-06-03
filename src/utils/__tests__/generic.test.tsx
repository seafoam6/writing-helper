import { getResultFromAPICall } from '../generic';

const thing = {
  data: {
    command: 'INSERT',
    rowCount: 1,
    oid: 0,
    rows: [
      {
        description: 'test3',
        created_on: '2019-06-02T21:46:52.633Z',
        id: 51
      }
    ],
    fields: [
      {
        name: 'description',
        tableID: 16387,
        columnID: 2,
        dataTypeID: 25,
        dataTypeSize: -1,
        dataTypeModifier: -1,
        format: 'text'
      },
      {
        name: 'created_on',
        tableID: 16387,
        columnID: 3,
        dataTypeID: 1114,
        dataTypeSize: 8,
        dataTypeModifier: -1,
        format: 'text'
      },
      {
        name: 'id',
        tableID: 16387,
        columnID: 1,
        dataTypeID: 23,
        dataTypeSize: 4,
        dataTypeModifier: -1,
        format: 'text'
      }
    ],
    _parsers: [null, null, null],
    _types: {
      _types: {
        arrayParser: {}
      },
      text: {},
      binary: {}
    },
    RowCtor: null,
    rowAsArray: false
  },
  status: 201,
  statusText: 'Created',
  headers: {
    'content-type': 'application/json; charset=utf-8'
  },
  config: {
    url: 'http://localhost:3000/todos',
    method: 'post',
    data: '{"description":"test3"}',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=utf-8'
    },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1
  },
  request: {}
};

describe('getResultFromAPICall', () => {
  it('returns a relevant Todo Object', () => {
    expect(getResultFromAPICall(thing)).toEqual({
      description: 'test3',
      created_on: '2019-06-02T21:46:52.633Z',
      id: 51
    });
  });
});
