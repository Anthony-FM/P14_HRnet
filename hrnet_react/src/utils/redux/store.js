// feature
import form from "../../features/form";
import modal from "../../features/modal";
import header from "../../features/header";
import search from "../../features/search";
// configureStore @reduxToolkit
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        form: form,
        modal : modal,
        header : header,
        search: search

    }
})