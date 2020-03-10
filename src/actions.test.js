import {add, remove} from './actions';
import { ADD, REMOVE } from './actionTypes';

describe('actions', () => {
  it('should create an action to add an item', () => {
    const payload = {};
    const expectedAction = {
      type: ADD,
      payload
    }
    expect(add(payload)).toEqual(expectedAction)
  })

  it('should create an action to remove an item', () => {
    const payload = {};
    const expectedAction = {
      type: REMOVE,
      payload
    }
    expect(remove(payload)).toEqual(expectedAction)
  })
})