import React from "react";
import UserList from "./UserList";

const Inicio = ({ handleShow, showUser, deleteUser, handleUpdate }) => {    
    return (
        <main
            className="bg-[#101010] min-h-screen font-Lato
            bg-[url(/imgs/Ellipsev.png)] bg-right-bottom bg-no-repeat">
            <div 
            style={{ backgroundImage: 'url("/imgs/Ellipsem.png")' }} 
            className="bg-left-bottom bg-no-repeat min-h-screen "
            >

                <h1 className="text-[#8EFF8B] text-2xl text-center pt-14 font-semibold ">
                    List of user
                </h1>
                <div className="px-4 ">
                    <button
                        onClick={handleShow}
                        className="flex justify-center rounded-md mx-auto my-6 w-[min(100%,_400px)] 
                        bg-[#CBFFDA] px-8 py-1 text-base font-normal "
                    >
                        Create new user
                    </button>
                </div>
                {
                    showUser.length === 0 ?
                        (
                            <section className="grid min-h-[50vh] ">
                                <div className=" m-auto  ">
                                    <img src="/imgs/photoI.png" alt="" />
                                </div>
                                <div>
                                    <h1 className="text-[#AFAEAE] text-center text-base font-medium w-[300px] m-auto ">
                                        You don't have any users on your list. Create a new user
                                    </h1>
                                </div>
                            </section>
                        )
                        :
                        (
                            <section className="mx-4                             
                            max-w-[1200px] sm:mx-auto ">
                                <UserList deleteUser={deleteUser} showUser={showUser} handleShow={handleShow} 
                                handleUpdate={handleUpdate}/>
                            </section>
                        )
                }
            </div>
        </main>
    );
};

export default Inicio;
