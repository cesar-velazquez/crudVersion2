import { useEffect, useState } from 'react'
import './App.css'
import Form from './components/UserCard'
import Inicio from './components/Inicio'
import axios from 'axios'
import { EMPTY_FORM_VALUES } from './shared/constants'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Añade estilos predeterminados
import { Toaster } from 'sonner'


const BASE_URL = "https://users-crud.academlo.tech/users/"

function App() {
  const [showUser, setShowUser] = useState([])
  const [isopen, setIsopen] = useState(false)
  //estado para saber si se está actualizando el usuario
  const [isUserUpdate, setIsUserUpdate] = useState(null)
  const [isEdit, setIsEdit] = useState(false)

  const handleShow = () => {
    setIsopen(!isopen)
    setIsUserUpdate(null)
  }

  // metodo para obtener todos los usurios
  const getAllUsers = () => {
    axios
      .get(BASE_URL)
      .then(({ data }) => setShowUser(data))
      .catch((err) => console.log(err))
  }

  //metodo para ingresar un usuario
  const createUser = (newUser, reset) => {
    axios
      .post(BASE_URL, newUser)
      .then(() => {
        getAllUsers()
        setIsopen(false)
        reset(EMPTY_FORM_VALUES)
        showCustomAlert("Usuario creado exitosamente");
      })
      .catch((err) => {
        console.log(err);
        showCustomAlert("Se ha producido un error al crear el usuario", true);
      });
  }

  const showCustomAlert = (message, isError = false) => {
    const alertElement = document.createElement("div");
    alertElement.className = `fixed top-5 right-5 px-4 py-2 rounded text-white ${isError ? 'bg-red-500' : 'bg-green-500'}`;
    alertElement.innerText = message;

    document.body.appendChild(alertElement);

    setTimeout(() => {
      alertElement.remove();
    }, 5000); // Cierra automáticamente el alert después de 5 segundos
  };

  // metodo para eliminar un usuario
  const deleteUser = (idUser) => {
    axios
      .delete(BASE_URL + idUser + '/')
      .then(() => {
        getAllUsers()
        setIsopen(false)
      })
      .catch((err) => console.log(err))
  }

  // para mostrar el modal del update
  const handleUpdate = (user) => {
    setIsopen(true)
    setIsUserUpdate(user)
    // setIsEdit(true)
  }

  // metodo para actualizar con axios
  const UpdateUser = (UpdateUser, reset) => {
    axios
      .patch(BASE_URL + isUserUpdate.id + '/', UpdateUser)
      .then(() => {
        getAllUsers()
        setIsopen(false)
        setIsEdit(false)
        reset(EMPTY_FORM_VALUES)
        setIsUserUpdate(null)
      })
      .catch((err) => console.log(err))
  }


  const UpdateEdit = () => {
    setIsEdit(true)
  }

  useEffect(() => {
    getAllUsers()
  }, [])


  return (
    <main>
      {
        isopen ?
          (
            <div className='bg-[#101010] min-h-screen
            bg-[url(/imgs/Ellipsev.png)] bg-right-bottom bg-no-repeat  '>
              <div className='bg-[url(imgs/Ellipsem.png)] bg-left-bottom bg-no-repeat min-h-screen '>
                <section className=' flex mx-auto min-h-screen  '>
                  <section className='flex m-auto '>
                    <Form handleShow={handleShow} createUser={createUser}
                      isUserUpdate={isUserUpdate} UpdateUser={UpdateUser}
                      isEdit={isEdit}
                      setIsEdit={setIsEdit}
                      UpdateEdit={UpdateEdit}
                    />
                  </section>
                </section>
              </div>
            </div>
          )
          :
          (
            <Inicio deleteUser={deleteUser} showUser={showUser} handleShow={handleShow}
              handleUpdate={handleUpdate}
            />
          )
      }
    </main>
  )
}

export default App
