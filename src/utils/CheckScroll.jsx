import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const CheckScroll = () => {
    
    const location = useLocation();//detecta cambios cuando cambiamos de ruta.
    
    useEffect(() => {
        scrollTo(100,0);//cada vez que cambiamos de ruta siempre se posiciona en la parte superior de la pagina.
    }, [location]);
    return (
        <>
            
        </>
    );
}

export default CheckScroll;
