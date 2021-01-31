import { dispatchZipcode, getZipcode } from "../__components__/__redux__/Actions/REDUX_zipcode";
import { jest } from "@jest/globals";

test('dispatch change state?', ()=>{
    dispatchZipcode("37076")
    expect(getZipcode()).toBe("37076")
})