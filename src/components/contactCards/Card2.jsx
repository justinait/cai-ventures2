import './card2.css';
import { useState , useEffect , useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import config from '../../config/config.js';


const Card2 = () => {

    const formulario = useRef();
    const {service_id,template_id,public_id} = config.EMAIL;
    const [loading, setLoading] = useState(false);

    const estilos ={
        color:"red",
        paddingLeft:"25px",
        margin:"0"
    }

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
        message:{
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
    
    const handleSubmitForm =(e)=> {
        e.preventDefault();
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

        emailjs.sendForm(service_id, template_id, formulario.current,public_id)
        .then((result) => {
            setLoading(false);
            console.log(result);
            if (result.text === 'ok') {
                Swal.fire({
                    icon: 'success',
                    title: 'Mensaje enviado',
                    text: '¡Sera respondido a la brevedad!'
                });
                e.target.first_name.value = "";
                e.target.email.value = "";
                e.target.message.value = "";
                setLoading(true);
            }
        }, (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error}`,
            })
        });
    }

    useEffect(() => {
        
    }, [input,loading]);
    
    return (
        <div className="divContactContainer">
            <h2>¡Contactanos!</h2>
            <form className="formContactContainer" onSubmit={handleSubmitForm} ref={formulario}>
                <input type="text" placeholder='Nombre y Apellido' name="first_name" value={input['first_name'].value} onChange={handleInputChange}/>
                {input.first_name.error&& <p style={estilos}>{input.first_name.error}</p>}

                <input type="email" name="email" placeholder='Email' value={input['email'].value} onChange={handleInputChange}/>
                {input.email.error&& <p style={estilos}>{input.email.error}</p>}

                <textarea name="message" placeholder='Mensaje' cols="30" rows="10" value={input['message'].value} onChange={handleInputChange}></textarea>
                {input.message.error&& <p style={estilos}>{input.message.error}</p>}
                
                <button className='btnFormContact' disabled={loading}>enviar</button>
            </form>
        </div>
    );
};

export default Card2;
