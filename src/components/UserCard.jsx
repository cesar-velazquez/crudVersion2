import { IconEyeClosed } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';


const Form = ({ handleShow, createUser, UpdateUser, isUserUpdate, isEdit, UpdateEdit, setIsEdit }) => {
    const [isView, setIsView] = useState(false)

    const { handleSubmit, register, reset, formState: { errors }, } = useForm();

    const submit = (data) => {
        if (isUserUpdate && isEdit) {
            UpdateUser(data, reset)
        } else {
            createUser(data, reset)
        }
    }

    const HandleView = () => {
        setIsView(!isView)
    }

    const handleCancelEdit = () => {
        setIsEdit(false)
        handleShow()
    }
    useEffect(() => {
        if (isUserUpdate) {
            reset(isUserUpdate)
        }
    }, [isUserUpdate])

    return (
        <main className=' flex min-h-[135vh]  sm:min-h-screen font-Lato '>
            <section className='relative flex m-auto '>
                <div className='w-[100px] aspect-square absolute left-1/2 -translate-x-1/2 top-[-15%] z-10 '>
                    <img src="/imgs/photoI.png" alt="" />
                </div>

                <form
                    onSubmit={handleSubmit(submit)}
                    className='bg-[#3C3C3D]  w-[300px] p-4 
                    rounded-2xl shadow-black shadow-2xl relative '
                    action="">
                    <div className='absolute top-2 right-2 bg-[#CBFFD9] w-[30px] 
                    flex justify-center aspect-square rounded-full cursor-pointer hover:bg-green-500 '
                        onClick={handleShow}>
                        <p>x</p>
                    </div>

                    <section className='grid justify-center items-center pt-5 gap-4'>
                        <h1 className='text-[#8EFF8B] text-center border rounded-2xl p-2 ' >{isUserUpdate !== null ? "Edit User" : "Create New User"}</h1>
                        <div className='flex flex-col gap-1 text-[#8EFF8B] '>
                            <label htmlFor="first_name">Name</label>
                            <input
                                placeholder='Enter name'
                                className='bg-transparent border rounded-md px-4 py-1 text-base'
                                type="text"
                                id='first_name'
                                {...register("first_name", {})}
                            />
                        </div>

                        <div className='flex flex-col gap-1 text-[#8EFF8B] '>
                            <label htmlFor="last_name">Last Name</label>
                            <input

                                placeholder='Enter last name'
                                className='bg-transparent border rounded-md px-4 py-1 text-base'
                                type="text"
                                id='last_name'
                                {...register("last_name", {})} />
                        </div>

                        <div className='flex flex-col gap-1 text-[#8EFF8B] '>
                            <label htmlFor="email">Email address</label>
                            <input
                                placeholder='Enter email'
                                className='bg-transparent border rounded-md px-4 py-1 text-base '
                                type="email"
                                id='email'
                                {...register("email", {})}
                            />
                        </div>

                        <div className='flex flex-col gap-1 text-[#8EFF8B] '>
                            <label htmlFor="password">Password</label>
                            <div className='relative'>
                                {
                                    isView ? 
                                    (
                                        <input
                                    placeholder='Enter password'
                                    className='bg-transparent border rounded-md px-4 py-1 text-base '
                                    type="text"
                                    id='password'
                                    {...register("password", {})} />
                                    ) : (
                                        <input
                                    placeholder='Enter password'
                                    className='bg-transparent border rounded-md px-4 py-1 text-base '
                                    type="password"
                                    id='password'
                                    {...register("password", {})} />
                                    )

                                }
                                
                                {
                                    isView ?
                                        (<button
                                        type='button'
                                            onClick={HandleView}
                                            className=' absolute top-[3px] right-1 h-[28px] w-[30px] 
                                            bx bxs-low-vision text-xl
                                            bg-black/20 '></button>)
                                        :
                                        (
                                            <button
                                                type='button'
                                                onClick={HandleView}
                                                className='absolute top-[5px] right-1 w-[30px] 
                                                flex justify-center bg-black/20 '>
                                                <IconEyeClosed />
                                            </button>
                                        )

                                }
                            </div>
                        </div>

                        <div className='flex flex-col gap-1 text-[#8EFF8B] '>
                            <label htmlFor="birthday">Birthday</label>
                            <input
                                placeholder='dd/mm/yyyy'
                                className='bg-transparent border rounded-md px-4 py-1 text-base '
                                type="date"
                                id='birthday'
                                {...register("birthday", {})} />
                        </div>
                    </section>

                    <section className='flex flex-col mt-3 gap-2 '>


                        {
                            isUserUpdate !== null ?
                                <button
                                    type='button'
                                    onClick={UpdateEdit}
                                    className='bg-[#CBFFDA] w-[80%] rounded-md m-auto text-[#302F2F] '>Save Changes</button>
                                :
                                <button className='bg-[#CBFFDA] w-[80%] rounded-md m-auto text-[#302F2F] '>
                                    Save User</button>
                        }

                        {
                            isEdit ?
                                (
                                    <div className='fixed bg-black/50 top-0 bottom-0 left-0 right-0'>
                                        <div className='absolute z-10 left-1/2 -translate-x-1/2 top-[30%] translateY(-50%)
                                bg-[#3C3C3D] h-[200px] w-[min(100%,_400px)] rounded-2xl '>

                                            <div className='absolute top-1 right-3 '>
                                                <button
                                                    onClick={handleCancelEdit}
                                                    className='bg-[#8EFF8B] 
                                    w-[20px] h-[20px] aspect-square flex justify-center
                                    items-center rounded-full font-bold' >X</button>
                                            </div>

                                            <div className='w-[70px] aspect-square
                                    absolute top-[-50px] left-1/2 -translate-x-1/2 '>
                                                <img
                                                    src="/imgs/photoI.png" alt="" />
                                            </div>


                                            <div className='flex flex-col h-[90%] '>
                                                <div className='m-auto'>
                                                    <p className='text-center text-white '>Are you sure you want to edit this user?</p>
                                                </div>
                                                <div className='flex flex-col gap-2'>
                                                    <button
                                                        className='bg-[#8EFF8B] px-4 text-base w-[150px] 
                                                    flex m-auto justify-center items-center text-center '>
                                                        Yes, edit</button>
                                                    <button
                                                        onClick={handleCancelEdit}
                                                        // onClick={handleShow}
                                                        className='text-[#8EFF8B]'>or cancel edit
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                :
                                (
                                    <div></div>
                                )
                        }


                        <button
                            onClick={handleShow}
                            className='text-[#CBFFD9] text-base '>or cancel</button>
                    </section>

                </form>
            </section>
        </main>
    )
}

export default Form