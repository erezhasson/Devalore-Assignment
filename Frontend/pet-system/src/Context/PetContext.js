import React, { useContext } from 'react'

const PetContext = React.createContext()

PetContext.options = [
    { value: 'Dog', label: 'Dog' },
    { value: 'Cat', label: 'Cat' },
    { value: 'Horse', label: 'Horse' }
  ];
   
export function usePetContext() {
    return useContext(PetContext)
}

  
export default PetContext;