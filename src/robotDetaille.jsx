import React from 'react';

const Robotdetaille = ({ user }) => {
    return (
        <div>
            <div className="d-flex justify-content-center border-bottom">
                <img className="ImageDeprofile mb-4 bg-secondary" src={user.src} alt="user.alt" />
            </div>
            <div>
                <p> <em className="m-2">Name:</em>{user.name}</p>
                <p><em className="m-2">Email:</em>{user.email}</p>
                <p><em className="m-2">Username:</em>{user.username}</p>
                <p><em className="m-2">Phone :</em>{user.phone}</p>
                <p> <em className="m-2"> Adress:</em> {user.address.street + " " + user.address.city}</p>
            </div>
        </div>

    )
}
export default Robotdetaille