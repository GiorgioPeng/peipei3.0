import Router from "vue-router";
import Vue from "vue";

// import Test from "./components/hello.vue"
const Start = (resolve) => require(["~/pages/start.vue"], resolve)
const Info = resolve => require(["~/pages/info.vue"], resolve)
const Sleep = resolve => require(["~/pages/sleep.vue"], resolve)
const Habit1 = resolve => require(["~/pages/habit1.vue"], resolve)
const Habit2 = resolve => require(["~/pages/habit2.vue"], resolve)
const Hobby = resolve => require(["~/pages/hobby.vue"], resolve)
const HobbyDetail = resolve => require(["~/pages/hobby-detail.vue"], resolve)
const End = resolve => require(["~/pages/end.vue"], resolve)

Vue.use(Router);
export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/start",
            meta: {
                index: 1
            }
        },
        {
            path: "/start",
            name: "start",
            component: Start,
            meta: {
                index: 2
            }
        },
        {
            path: "/info",
            name: "info",
            component: Info,
            meta: {
                index: 3
            }
        },
        {
            path: "/sleep",
            name: "sleep",
            component: Sleep,
            meta: {
                index: 4
            }
        },
        {
            path: "/habit1",
            name: "habit1",
            component: Habit1,
            meta: {
                index: 5
            }
        },
        {
            path: "/habit2",
            name: "habit2",
            component: Habit2,
            meta: {
                index: 6
            }
        },
        {
            path: "/hobby",
            name: "hobby",
            component: Hobby,
            meta: {
                index: 7
            }
        },
        {
            path: "hobbydetail",
            name: "hobbyDetail",
            component: HobbyDetail,
            meta: {
                index: 8
            }
        },
        {
            path: "end",
            name: "end",
            component: End,
            meta: {
                index: 9
            }
        }
    ]
})