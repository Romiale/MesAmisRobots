import React from 'react';

const Robotdetaille = ({ user }) => {
    return (
        <div>
            <div className="d-flex justify-content-center border-bottom">
                <img className="ImageDeprofile mb-4 col-8 bg-secondary" src={user.src} alt="user.alt" />
            </div>
            <div>
                <p className="m-2"><span className="h6"> Name:</span> {user.name}</p>
                <p className="m-2"><span className="h6">Email:</span> {user.email}</p>
                <p className="m-2"><span className="h6">Username:</span> {user.username}</p>
                <p className="m-2"><span className="h6">Phone :</span> {user.phone}</p>
                <p className="m-2"><span className="h6">Adress:</span> {user.address.street + " " + user.address.city}</p>
            </div>
        </div>

    )
}
export default Robotdetaille