import { configureStore } from "@reduxjs/toolkit";

import { cryptoAPI } from "../app/api/cryptoAPI"

export default configureStore({
    reducer: {
        [cryptoAPI.reducerPath]: cryptoAPI.reducer,
    }
});