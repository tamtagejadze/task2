import './App.css';
import { useState } from 'react';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import ChangeLanguage from './components/Header/Changelanguage';


function App() {
  const [language,setLanguage] = useState("eng")
  return (
    <div className="App">
    <ChangeLanguage.Provider value={{language,setLanguage}}>
      <Header/>
    </ChangeLanguage.Provider>
      <Content/>
    </div>
  );
}

export default App;
