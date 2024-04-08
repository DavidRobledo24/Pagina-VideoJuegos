import React, { useState } from 'react'
import './registro.css'

export default function Registro() {

    const[values, setValues] =useState({
        documento:"",
        nombre:"",
        apellido:"",
        email:"",
        direccion:"",
        telefono:"",
        fecha:"",
        password1:"",
        password2:""
    });

    const handlechange = (e) =>{
        const{name, value}=e.target
        const newValues ={
            ...values,
            [name]:value,
        }
        setValues(newValues)
    }

    return (
        <div className='contenedorRegistro' >
            <form>
                <div class="form-group">
                    <label for="documento">Numero de Documento</label>
                    <input type= "number" className="form-control" id="documento" name="documento" onChange={handlechange} placeholder="deberá ser estar entre 5 y 10 dígitos"/>
                </div>
                <div className="form-group">
                    <label for="nombre">Nombre</label>
                    <input type= "text" className="form-control" id="nombre" name="nombre" onChange={handlechange} placeholder="Ingrese su Nombre"/>
                </div>
                <div className="form-group">
                    <label for="apellido">Apellidos</label>
                    <input type= "text" className="form-control" id="apellido" name="apellido" onChange={handlechange} placeholder="Ingrese su Apellido"/>
                </div>
                <div className="form-group">
                    <label for="email">Correo Electronico</label>
                    <input type="email" className="form-control" id="email" name="email" onChange={handlechange} aria-describedby="emailHelp" placeholder="Ingrese su correo electronico"/>
                </div>
                <div className="form-group">
                    <label for="direccion">Direccion completa</label>
                    <input type= "text" className="form-control" id="direccion" name="direccion" onChange={handlechange} placeholder="Ingrese su direccion"/>
                </div>
                <div className="form-group">
                    <label for="telefono">Numero telefonico</label>
                    <input type= "number" className="form-control" id="telefono" name="telefono" onChange={handlechange} placeholder="Ingrese su telefono, debe ser de diez números"/>
                </div>
                <div className="form-group">
                    <label for="fecha">Fecha de Nacimiento</label>
                    <input type= "date" className="form-control" id="fecha" name="fecha" onChange={handlechange}/>
                </div>
                <div className="form-group">
                    <label for="Password1">Password</label>
                    <input type="password" className="form-control" id="Password1" name="password1" onChange={handlechange} placeholder="debe ser mínimo de 8 caracteres, una mayúscula, una  minúscula, un número"/>
                </div>
                <div className="form-group">
                    <label for="Password2">Password</label>
                    <input type="password" className="form-control" id="Password2" name="password2" onChange={handlechange} placeholder="Repita su Password"/>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Acepta los terminos y condiciones?</label>
                </div>
                <button type="submit" className="btn btn-primary">Registrarse!</button>
            </form>
        </div>
    )
}
