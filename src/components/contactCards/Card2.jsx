import './card2.css';
import { useState , useEffect } from 'react';


const Card2 = () => {

    //defino los valores de cada unput para acceder a su valor despues.
    const [input, setInput] = useState({
        first_name:{
            value:'',
            error:''
        },
        email:{
            value:'',
            error:''
        },
        description:{
            value:'',
            error:''
        }
    });
    //por cada vez que detectes un cambio agregalo a lo que ya tenia y guarda esos cambios en value.
    const handleInputChange = (e) =>{
        setInput(prev=>({
            ...prev,
            [e.target.name]:{
                value:e.target.value,
                error:null
            }
        }));    
    };
    
    const handleSubmitForm =(evt)=> {
        evt.preventDefault();
        let stop = false;
        Object.keys(input).forEach(key=>{
            if (input[key].value.trim().length === 0) {
                stop = true;
                setInput(prev=>({
                    ...prev,
                    [key]:{
                        ...prev[key],
                        error:'Complete este campo'
                    }
                }))
            }
        });
        if(stop) return;
    }
    
    useEffect(() => {
        
    }, [input]);
    
    const estilos ={
        color:"red",
        paddingLeft:"25px",
        margin:"0"
    }
    return (
        <div className="divContactContainer">
            <h2>¡Contactanos!</h2>
            <form className="formContactContainer" onSubmit={handleSubmitForm}>
                <input type="text" placeholder='Nombre y Apellido' name="first_name" value={input['first_name'].value} onChange={handleInputChange}/>
                {input.first_name.error&& <p style={estilos}>{input.first_name.error}</p>}

                <input type="email" name="email" placeholder='Email' value={input['email'].value} onChange={handleInputChange}/>
                {input.email.error&& <p style={estilos}>{input.email.error}</p>}

                <textarea name="description" placeholder='Mensaje' cols="30" rows="10" value={input['description'].value} onChange={handleInputChange}></textarea>
                {input.description.error&& <p style={estilos}>{input.description.error}</p>}
                
                <button className='btnFormContact'>enviar</button>
            </form>
        </div>
    );
};

export default Card2;
