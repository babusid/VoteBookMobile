import { dispatchZipcode, getZipcode } from "../__components__/__redux__/Actions/REDUX_zipcode";
import { rootStore } from "../__components__/__redux__/store"
import { jest } from "@jest/globals";

test("What is error is thrown when there is no zipcode?",()=>{
    getZipcode()
    expect(getZipcode()).toBe(null)
})

test('dispatch + getDispatch match?', ()=>{
    dispatchZipcode(37076)
    expect(getZipcode()).toBe(37076)
})

test("state holding zipcode properly?",()=>{
    dispatchZipcode(37076)
    expect(rootStore.getState().zipcode).toBe(37076)
})


