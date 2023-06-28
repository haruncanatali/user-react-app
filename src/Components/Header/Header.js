import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import UserList from "../User/List";
import UserDetail from "../User/Detail";
import UserAdd from "../User/Add";
import Error404 from "../Error404/Error404";

function Navbar(){
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand">Kullanıcı Yönetim Uygulaması</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <NavLink className="nav-link" exact to="/users" activeClassName="active">Kullanıcılar</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to="/add-user" activeClassName="active">Kullanıcı Ekle</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

function Header(){
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<UserList/>}></Route>
                    <Route path="/home" element={<UserList/>}></Route>
                    <Route path="/users" element={<UserList/>}></Route>
                    <Route path="/add-user" element={<UserAdd/>}></Route>
                    <Route path="/user-detail/:id" element={<UserDetail/>}></Route>
                    <Route path="*" element={<Error404/>}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default Header;