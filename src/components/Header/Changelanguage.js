import React from 'react';
import { createContext } from "react";

const ChangeLanguage = createContext({
    language: "EN",
    setLanguage: () =>{}
})

export default ChangeLanguage;