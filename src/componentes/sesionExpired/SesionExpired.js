import React from 'react'
import { useIdleTimer } from 'react-idle-timer';
import Swal from 'sweetalert2';
import Cookies from 'universal-cookie';

const timeout = 30000;

function SesionExpired() {
    const cookies = new Cookies()

    const onIdle= ()=> {
      cookies.remove('email', {path: "/"})
      cookies.remove('nombres', {path: "/"})
      cookies.remove('apellidos', {path: "/"})
      window.location.hash = '/login'
      Swal.fire({
            title : "La sesion expiro por inactividad. Inicie sesion nuevamente",
            icon: "info"
        })
    }

    const getRemainingTime = useIdleTimer({
        onIdle,
        timeout,
        throttle: 500
    })
    console.log(getRemainingTime)
  return (
    <div></div>
  )
}

export default SesionExpired