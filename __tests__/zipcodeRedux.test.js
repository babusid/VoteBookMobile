import {dispatchZipcode, getZipcode} from '../__components__/__redux__/Actions/REDUX_zipcode.js';
import {jest} from "@jest/globals";

test('dispatch change state'), ()=>{
    dispatchZipcode("37027")
    expect(getZipcode()).toBE("37027")
}