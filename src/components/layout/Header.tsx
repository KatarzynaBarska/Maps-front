import React, {SyntheticEvent, useContext, useState} from "react";
import {Btn} from "../common/Btn";

import './Header.css';
import {SearchContext} from "../../contexts/search.contex";

export const Header = () => {
    const {search, setSearch} = useContext(SearchContext);
    const [inputVal, setInputVal] = useState(search);

    const setSearchFromLocalState = (e: SyntheticEvent) => {
        e.preventDefault();
        setSearch(inputVal);
    }
    return (
        <header>
            <a href="/">
                <h1>
                    <strong>Mega</strong> ogłoszenia
                </h1>
            </a>
            <Btn to="/add"  text="Dodaj ogłoszenie"/>
            <form className="search" onSubmit={setSearchFromLocalState}>
                <input type="text" value={inputVal} onChange={e => setInputVal(e.target.value)}/>
                <Btn text="Szukaj"/>
            </form>
        </header>
    )
}
// uproszczony zapis prostego komponentu export const Name = () => (
//code..
//); bez return