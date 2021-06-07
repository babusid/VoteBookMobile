import { dispatchZipcode, getZipcode } from "../__components__/__redux__/Actions/REDUX_zipcode";
import { rootStore } from "../__components__/__redux__/store"
import { jest, test, expect } from "@jest/globals";

test('dispatch + getDispatch match?', ()=>{
    dispatchZipcode(37076)
    expect(getZipcode()).toBe(37076)
})

test("state holding zipcode properly?",()=>{
    dispatchZipcode(37076)
    expect(rootStore.getState().zipcode).toBe(37076)
})
