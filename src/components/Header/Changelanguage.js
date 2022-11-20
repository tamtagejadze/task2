import React from 'react';
import { createContext } from "react";

const ChangeLanguage = createContext({
    language: "",
    setLanguage: () =>{}
})

export default ChangeLanguage;