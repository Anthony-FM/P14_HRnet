// feature
import form from "../../features/form";
// configureStore @reduxToolkit
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        form: form
    }
})