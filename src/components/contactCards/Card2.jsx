import './card2.css';
import { useState , useRef } from 'react';
import emailjs from '@emailjs/browser';
import config from '../../config/config.js';
import { successAlert,loadingAlert } from '../../utils/alert.js';


const Card2 = () => {

    const formulario = useRef();
    const {service_id,template_id,public_id} = config.EMAIL;
    const [btnsubmit, setBtnsubmit] = useState(false);//cambio el estado de boton al hacer click en submit
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

    const estilos ={
        color:"red",
        paddingLeft:"25px",
        margin:"0px",
    }

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

    //creo una funcion que limpia los valores del input una vez que realizo el envio.
    const clearInputValue = () =>{
        setInput({
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
                        error:'*Este campo es obligatorio'
                    }
                }));
            }
        });
        if(stop) return;
        setBtnsubmit(true);//una vez que presionado cambie su valor hasta quew obtenga una respuesta
        loadingAlert();//alerta que aprece mientras espera el resultado de la respuesta
        emailjs.sendForm(service_id, template_id, formulario.current,public_id)
        .then((result) => {
            if (result.status === 200) {
                successAlert();//es una funcion que contiene la alerta de mensaje enviado
                clearInputValue();//esta funcion limpia el fomrulario desde cero.
                setBtnsubmit(false);
            }
        }, (error) => {
            if (error) {
                window.location('/error')
            }
        });
    }

    return (
        <div className="divContactContainer">
            <h2>¡Contactanos!</h2>
            <form className="formContactContainer" onSubmit={handleSubmitForm} ref={formulario}>
                {input.first_name.error&& <p style={estilos}>{input.first_name.error}</p>}
                <input type="text" placeholder='*Nombre y Apellido' name="first_name" value={input['first_name'].value} onChange={handleInputChange}/>

                {input.email.error&& <p style={estilos}>{"*Ingresa un mail válido"}</p>}
                <input type="email" name="email" placeholder='*Email' value={input['email'].value} onChange={handleInputChange}/>

                {input.message.error&& <p style={estilos}>{input.message.error}</p>}
                <textarea name="message" placeholder='*Mensaje' cols="30" rows="10" value={input['message'].value} onChange={handleInputChange}></textarea>
                
                <div className='btnFormContainer'>
                    <button className='btnFormContact' disabled={btnsubmit}>enviar</button>
                </div>
            </form>
        </div>
    );
};

export default Card2;
