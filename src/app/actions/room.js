import {
  getRoom,
  bindRoomCurrentRecord,
  subscribeOnUpdateRoom
} from 'app/utils/room';

import graphqlActionHelper, {
  ACTION_STATE
} from 'app/utils/graphqlActionHelper';

function getRoomInfo(id) {
  return async dispatch => {
    dispatch(
      graphqlActionHelper({
        method: 'FETCH',
        dataName: 'ROOM',
        actionState: ACTION_STATE.STARTED
      })
    );
    try {
      const result = await getRoom(id);
      dispatch(
        graphqlActionHelper({
          method: 'FETCH',
          dataName: 'ROOM',
          actionState: ACTION_STATE.SUCCESS,
          result
        })
      );
      if (result.currentRecord) {
        dispatch({ type: 'SET_CURRENT_RECORD', payload: result.currentRecord });
      }
      console.log('#get room', result);
    } catch (error) {
      dispatch(
        graphqlActionHelper({
          method: 'FETCH',
          dataName: 'ROOM',
          actionState: ACTION_STATE.FAILURE,
          result: error
        })
      );
    }
  };
}

export { getRoomInfo };