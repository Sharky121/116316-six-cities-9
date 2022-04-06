import {combineReducers} from '@reduxjs/toolkit';
import {dataProcess} from './data-process/data-process';
import {userProcess} from './user-process/user-process';
import {anotherProcess} from './another-process/another-process';
import {NameSpace} from '../consts';

export const rootReducer = combineReducers({
  [NameSpace.user]: userProcess.reducer,
  [NameSpace.data]: dataProcess.reducer,
  [NameSpace.another]: anotherProcess.reducer,
});
