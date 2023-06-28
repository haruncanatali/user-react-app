import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Card,Image } from "react-bootstrap";   

const url = "http://localhost:5135/api/User/Get/"

function UserDetail(){

    const {id} = useParams()

    const [user,setUser] = useState({})

    useEffect(() => {
        axios.get(url+id).then((res) => setUser(res.data))
    },[])

    return (
    <>
        <div className="row d-flex justify-content-center">
            <Card>
                <Card.Header>
                    <Card.Title>{user.fullName}</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Image src={user.profilePicture} fluid></Image>
                    <div className="mt-3">
                        <p>Id : {user.id}</p>
                        <p>Kullanıcı Adı : {user.username}</p>
                        <p>E-Posta : {user.email}</p>
                        <p>BIO : {user.bio}</p>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </>
    );
}

export default UserDetail;