import { configureStore } from "@reduxjs/toolkit";

import dealSlice from "./deal";
import rest from "./middlewares/rest";

const store = configureStore({
    reducer: {
        dealSlice
    },
    middleware: [rest]
});

export default store;

export type RootState = ReturnType<typeof store.getState>