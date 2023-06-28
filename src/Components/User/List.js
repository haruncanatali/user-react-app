import axios from "axios";
import { useState,useEffect } from "react";
import { Card,Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const url = "http://localhost:5135/api/User/List"

function UserList(){

    const [users,getUsers] = useState([{}])

    useEffect(() => {
        axios.get(url).then((res) => getUsers(res.data))
    },[])

    return (<>
        <div className="container">
            <h1 className="text-center">Kullanıcı Listesi</h1><hr/>
            <div className="row">
                {
                    users ?
                        users.map(user => (
                        <div key={user.id} className="col-md-4 mt-4">
                            <Card>
                            <Card.Body>
                                <Image style={{width:500,height:300}} src={user.profilePicture} alt="Image Description" fluid />
                                <Card.Title className="text-center mt-2">{user.fullName}</Card.Title>
                                <div className="d-flex justify-content-center">
                                    <Link to={`/user-detail/${user.id}`} className="btn btn-info mt-2">Detay</Link>
                                </div>
                            </Card.Body>
                            </Card>
                        </div>
                    ))
                    : null        
                }
            </div>
        </div>
    </>);
}

export default UserList;