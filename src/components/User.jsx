import React, { useState } from 'react'


const User = ({ userlist, deleteUser, handleUpdate }) => {
    const [isDelete, setIsDelete] = useState(false)    

    const handleDelete = () => {
        setIsDelete(!isDelete)
    }

    return (
        <section
            className='bg-white/50 rounded-xl border p-4   '>
            <section className='flex justify-between items-center px-2 py-2  '>
                <div className='w-[60%] '>
                    <h1 className='border-b border-[#b1afaf] py-1 text-xl text-black ' >{userlist.first_name} {userlist.last_name}</h1>
                </div>
                <div className='flex gap-4'>

                    <i
                        onClick={handleDelete}
                        className='bx bxs-trash bg-red-600 p-2 rounded-md cursor-pointer'></i>
                    {
                        isDelete &&
                        (
                            <div className='fixed bg-black/50 top-0 bottom-0 left-0 right-0'>
                                <div className='absolute z-10 left-1/2 -translate-x-1/2 top-[30%] translateY(-50%)
                                bg-[#3C3C3D] h-[200px] w-[min(100%,_400px)] rounded-2xl '>

                                    <div className='absolute top-1 right-3 '>
                                        <button
                                            onClick={handleDelete}
                                            className='bg-[#D85D5D] 
                                    w-[20px] h-[20px] aspect-square flex justify-center items-center rounded-full' >X</button>
                                    </div>

                                    <div className='w-[70px] aspect-square
                                    absolute top-[-50px] left-1/2 -translate-x-1/2 '>
                                        <img
                                            src="/imgs/photoI.png" alt="" />
                                    </div>


                                    <div className='flex flex-col h-[90%] '>
                                        <div className='m-auto'>
                                            <p className='text-center '>Are you sure you want to delete this user?</p>
                                        </div>
                                        <div className='flex flex-col gap-2'>
                                            <button
                                                onClick={() => deleteUser(userlist.id)}
                                                className='bg-[#D85D5D] px-4 text-base w-[150px] flex m-auto justify-center items-center text-center '>Yes, delete</button>
                                            <button
                                            onClick={handleDelete}
                                                className='text-[#CBFFD9]'>or cancel
                                                </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                        {/* boton para editar -------------------------------------------- */}
                    <button
                        onClick={() => handleUpdate(userlist)}
                        className='bx bxs-edit-alt bg-white text-black p-2 rounded-md'>
                    </button>
                    {/* boton para editar -------------------------------------------- */}

                </div>
            </section>

            <section className='flex justify-between gap-4 text-xs px-2'>
                <div>
                    <h3 className='text-[#D3D3D3] '>Email</h3>
                    <h2>{userlist.email}</h2>
                </div>

                <div>
                    <h3 className='text-[#D3D3D3] '>Birthday</h3>
                    <h2>{userlist.birthday}</h2>
                </div>
            </section>
        </section>
    )
}

export default User