<<<<<<< HEAD
import {dispatchZipcode, getZipcode} from '../__components__/__redux__/Actions/REDUX_zipcode.js';
import {jest} from "@jest/globals";

test('dispatch change state'), ()=>{
    dispatchZipcode("37027")
    expect(getZipcode()).toBE("37027")
}
=======
import { dispatchZipcode, getZipcode } from "../__components__/__redux__/Actions/REDUX_zipcode";
import { rootStore } from "../__components__/__redux__/store"
import { jest } from "@jest/globals";

test('dispatch + getDispatch match?', ()=>{
    dispatchZipcode("37076")
    expect(getZipcode()).toBe("37076")
})

test("state holding zipcode properly?",()=>{
    dispatchZipcode("37076")
    expect(rootStore.getState().zipcode).toBe("37076")
})
>>>>>>> 891a74e6e2cd879887924ca3f6c5f40bb2c629be
