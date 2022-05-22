const state1 = { username: "john", point: 100, loading: true };
const state2 = {};

Object.assign(state2, state1);
state2.loading = false;
state2.point = 75;
state2.property = "success";

console.log(state2);
