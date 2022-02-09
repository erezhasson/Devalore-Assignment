import React, { useContext } from "react";

const PetContext = React.createContext({
    types: ["Dog", "Cat", "Horse", "Other"],
    colors: ["Black", "White"],
});

export function usePetContext() {
    return useContext(PetContext);
}