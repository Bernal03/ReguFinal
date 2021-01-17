import React, {createContext, useState, useEffect,useContext} from 'react';

export const PaisesContext = createContext();

const PaisesProvider = (props)=>{
    const [resultado, setResultado] = useState({
      NewConfirmed:"",
      TotalConfirmed:"",
      NewDeaths:"",
      TotalDeaths:"",
      NewRecovered:"",
      TotalRecovered:""
})
const [pais,setPais]=useState({
  NewConfirmed:"",
      TotalConfirmed:"",
      NewDeaths:"",
      TotalDeaths:"",
      NewRecovered:"",
      TotalRecovered:""
});

useEffect(() => {
        async function cargarInfo() {
          let response = await fetch('https://api.covid19api.com/summary')
          response = await response.json()
          setResultado(response)
          console.log(resultado.Countries);
           console.log(resultado.Global);
        }

        cargarInfo()
    }, [])



    
return(
        <PaisesContext.Provider
            value={{
                resultado,
                setResultado,
                pais,
                setPais
            }}
        >
            {props.children}
        </PaisesContext.Provider>
    )
}

export default PaisesProvider;