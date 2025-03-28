import axios from "axios";
import { call, put, takeLatest } from "redux-saga/effects";

async function apiCall() {
    return await axios.get("https://jsonplaceholder.typicode.com/todos/")
}

function *fetchData(){
    const res = yield(call(apiCall))
    yield(put({type:"DISPLAY", payload:res.data}))
}
export default function *Saga(){
 yield(takeLatest("FETCH", fetchData))
}