import { configureStore } from "@reduxjs/toolkit";

import uiReducer from "./ui-slice"

configureStore({
    reducer: {ui: uiSlice}
})