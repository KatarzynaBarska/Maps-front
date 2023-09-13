import React, {useState} from 'react';
import {SearchContext} from "./contexts/search.contex";
import {Header} from "./components/layout/Header";

import {Map} from "./components/Map/Map";
import {Route, Routes} from "react-router-dom";
import {AddForm} from "./components/common/AddForm/AddForm";

export const App = () => {

    const [search, setSearch] = useState('');


    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <Header/>
            <Routes>
                <Route path='/' element={<Map/>}/>
                <Route path='/add' element={<AddForm/>}/>
            </Routes>
            </SearchContext.Provider>
    );
};

// Provider pozwala aby cała aplikacja miała dostęp do Header i Map, value jest tym co jest w kontekście(pliku). Następnie tworzymy stan lokalny w rodzicu App.tsx- stan wewnętrzny i to będzie przekazywane do innych miejsc w aplikacji, czyli do Header i Map