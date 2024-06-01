import {atom, selector} from "recoil";
import axios from "axios";

export const signDetailsAtom = atom({
    key: "signDetailsAtom",
    default: {
        email: "",
        password: ""
    }
})

export const usernameDetailsAtom = atom({
    key: "usernameDetailsAtom",
    default: ""
})

export const userSignedInAtom = atom({
    key: "userSignedInAtom",
    default: false
})

export const allStocksAtom = atom({
    key: "allStocksAtom",
    default: []
})

export const updatedWatchlistAtom = atom({
    key: "updatedWatchlistAtom",
    default: ""
})

export const updatedWatchlistStateAtom = atom({
    key: "updatedWatchlistStateAtom",
    default: ""
})
