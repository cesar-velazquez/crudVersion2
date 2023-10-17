import React from 'react'
import User from './User'

const UserList = ({ showUser, deleteUser, handleShow, handleUpdate }) => {    
    return (
        <div className='text-white grid justify-center gap-4 w-auto 
        sm:grid-cols-2 sm:mx-4 lg:grid-cols-3 
        '>
            {
                showUser.map((userlist) => (
                    <User key={userlist.id} 
                    userlist={userlist}
                    deleteUser={deleteUser} 
                    handleShow={handleShow}
                    handleUpdate={handleUpdate}
                    />                    
                ))
            }
        </div>
    )
}

export default UserList