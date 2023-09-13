import {createContext} from "react";

export const SearchContext = createContext({
    search: '',
    setSearch: (s:string) => {}, // setSearch to funkcja, która potrafi zmieniać wartość search(czyli stan lokalny)
});