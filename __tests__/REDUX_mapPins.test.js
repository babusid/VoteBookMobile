import {dispatchMapPins, getMapPins} from '../__components__/__redux__/Actions/REDUX_mapPins'
import { jest } from '@jest/globals'
import * as err from '../__error'

test(
    "Testing whether Array Input is strict", ()=>{
        expect(()=>{dispatchMapPins("test")}).toThrow(err.ArrayThrowException)
    }
)

test(
    "Testing whether dispatch and get match", ()=>{
        const test = [1,2,3,4,5]
        dispatchMapPins(test);
        const recieve = getMapPins();
        expect(test).toEqual(recieve)
    }
)