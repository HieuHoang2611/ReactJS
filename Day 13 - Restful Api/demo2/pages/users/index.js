import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import axios from 'axios';
import Link from "next/link";

export default function UserList(){

    const [userlist,setUserList] = useState([]);

    useEffect(() =>{
        axios.get('http://localhost:3001/users')
        .then(res => {
            setUserList(res.data);
        })
        .catch(err => { console.log(err); });
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/users/' + id)
            .then(res => {
                if (res.status === 200) {
                    setUserList(userlist.filter(userlist => userlist.id !== id))
                }
            })
            .catch(err => { 
                console.log(err); 
            });
    }

    return(
        <div >
            <Layout>
                <div className="mt-5">
                    <div className="d-flex justify-content-between">
                    <h2>User List</h2>
                    <Link href='/users/create'>
                        <button className="btn btn-success mx-2">Create new user</button>
                    </Link>
                    </div>
                    <table className="table table-hover table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userlist.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>
                                            <Link href={{
                                                pathname: 'users/edit/' + user.id
                                            }}>
                                                <button className="btn btn-secondary mx-2">Edit</button>
                                            </Link>
                                            <button className="btn btn-warning mx-2" onClick={()=>handleDelete(index)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </Layout>
        </div>
    )
}