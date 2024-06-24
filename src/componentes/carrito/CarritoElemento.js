import React, { useContext} from "react";
import { dataContext } from "../dataContext/DataContext.js"

function CarritoElemento() {
  const {librosDelCarrito, setLibrosDelCarrito} = useContext(dataContext);

  const eliminarLibrosDelCarrito = (e) => {
    const librosFiltrados = librosDelCarrito.filter((filter) => filter.id !==Number(e.currentTarget.id))
    setLibrosDelCarrito(librosFiltrados)
  }

  //funcion para calcular el precio parcial
  const cantidad = () => {
    setLibrosDelCarrito((actualesLibs) => {
        return actualesLibs.map((libro) => {
          const valor = document.getElementById(libs.id)
          return { ...libs, precioCarrito: libs.precio * valor.value, cantidad: valor.value }
      });
    });
  }

  //funcion del formato de los numeros o cantidades
  const formatoNumero = (number) => {
    return new Intl.NumberFormat().format(number)
  }

  return librosDelCarrito.map((libs)=>{
    <section className="h-100">
        <div className="container h-100 py-5">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-10">
                    <div className="card rounded-3 mb-4">
                        <div className="card-body p-4">
                            <div className="row d-flex justify-content-between align-items-center">
                                <div className="col-md-2 col-lg-2 col-xl-2">
                                    <img src={libs.img} className="img-fluid rounded-3" alt="imagen"/>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-3">
                                    <p className="lead fw-normal mb-2">{libs.title}</p>
                                </div>
                                <div className="col-md-3 col-lg-3 col-xl-3 d-felx">
                                    <input id={libs.id} min="1" name="quantity" type="number" className="from-control from-control-sm" value={libs.cantidad} onChange={cantidad}/>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                    <h5 className="mb-0">${formatoNumero(libs.precioCarrito)}</h5>
                                </div>
                                <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                    <button className="btn btn-danger" id={libs.is} onClick={eliminarLibrosDelCarrito}><i className="bi bi-trash3-fill"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        
  })
}

export default CarritoElemento