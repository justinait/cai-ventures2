import './card2.css';
import { useState , useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import config from '../../config/config.js';


const Card2 = () => {

    const formulario = useRef();
    const {service_id,template_id,public_id} = config.EMAIL;
    const [btnsubmit, setBtnsubmit] = useState(false);//cambio el estado de boton al hacer click en submit

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
                        error:'Complete este campo'
                    }
                }));
            }
        });
        if(stop) return;
        setBtnsubmit(true);//una vez que presionado cambie su valor hasta quew obtenga una respuesta

        emailjs.sendForm(service_id, template_id, formulario.current,public_id)
        .then((result) => {
            let timerInterval
            Swal.fire({
                title: 'Enviando consulta...',
                html: 'procesando el mensaje <b></b>.',
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading()
                    const b = Swal.getHtmlContainer().querySelector('b')
                    timerInterval = setInterval(() => {
                        b.textContent = Swal.getTimerLeft()
                    }, 100)
                },
                willClose: () => {
                    clearInterval(timerInterval)
                }
            }).then(() => {
                if (result.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Mensaje enviado',
                        text: '¡Sera respondido a la brevedad!'
                    });
                    clearInputValue();//esta funcion limpia el fomrulario desde cero.
                    setBtnsubmit(false);
                }
            })
            
        }, (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error}`,
            })
        });
    }
    
    return (
        <div className="divContactContainer">
            <h2>¡Contactanos!</h2>
            <form className="formContactContainer" onSubmit={handleSubmitForm} ref={formulario}>
                {input.first_name.error&& <p style={estilos}>{input.first_name.error}</p>}
                <input type="text" placeholder='Nombre y Apellido' name="first_name" value={input['first_name'].value} onChange={handleInputChange}/>

                {input.email.error&& <p style={estilos}>{input.email.error}</p>}
                <input type="email" name="email" placeholder='Email' value={input['email'].value} onChange={handleInputChange}/>

                {input.message.error&& <p style={estilos}>{input.message.error}</p>}
                <textarea name="message" placeholder='Mensaje' cols="30" rows="10" value={input['message'].value} onChange={handleInputChange}></textarea>
                
                <button className='btnFormContact' disabled={btnsubmit}>enviar</button>
            </form>
        </div>
    );
};

export default Card2;
