import React, {useState} from "react";
import {connect} from "react-redux";
import {addUserTodo, deleteUserTodo, editUserTodo} from "./Action"
const TodoList = (props) => {
    const [listUser, setListUser] = useState('');
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('');
    const [currentUser, setCurrentUser] = useState({});
    const [search, setSearch] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const {todoReducer, handleAddUserTodo, handleDeleteUserTodo, handleEditUserName} = props;
    const {todos} = todoReducer;
    const handleInputUserName = (event) => {
        const value = event.target.value;
        setListUser(value);
    }
    const handleInputStatusUserName = (event) => {
        const value = event.target.value;
        setStatus(value);
    }
    const handleInputEmailUser = (event) => {
        const value = event.target.value;
        setEmail(value)
    }
    const handelAddUserName = () => {
        if(listUser && status && email){
            handleAddUserTodo({
                name: listUser,
                email: email,
                status: status,
            })
        }
        setListUser("");
        setEmail("")
        setStatus("")
    }
    // Delete User Name
    const handleOnclickDeleteUserName = (id) => {
        handleDeleteUserTodo(id)
    }
    // Edit User
    const handleOnClickEditUserName = (item) => {
        console.log("item", item);
        const {name, status, email} = item;
        setListUser(name);
        setEmail(email)
        setStatus(status);
        setCurrentUser(item)
    }
    const handelEditUserName = () => {
        const newTodo = {
            ...currentUser,
            name: listUser,
            email: email,
            status: status,
        }
        handleEditUserName(newTodo)
        setListUser("")
        setEmail("")
        setListUser("")
    }
    // Search 
    const handleInputSearch = (event) =>{
        const value = event.target.value;
        setSearch(value);
        const newValue = value.toLowerCase();
        const dataFilter = todos.filter(item => item.name.toLowerCase().includes(newValue));
        setSearchResult(dataFilter)

    }
    // Nếu trong trường hợp SEARCH có giá trị thì ta map cái mảng SEARCHRESULT còn trường hợp search ko có gí trị thì 
    // ta map mảng todos.
    const data = search ? searchResult : todos

    return(
        <>
            <h2>Todo List User</h2>
            <input type="text" name="search" value={search} onChange={(event)=>handleInputSearch(event)} placeholder="search" autoComplete="off"/>
            <h2>User Name: {listUser}</h2>
            <h2>Email: {email}</h2>
            <h2>Status: {status}</h2>
            <input type="text" name="name" value={listUser} onChange={(event)=>handleInputUserName(event)} placeholder="addUserName" autoComplete="off"/>
            <input type="email" name="email" value={email} onChange={(event)=>handleInputEmailUser(event)} placeholder="email" autoComplete="off"/>
            <input type="text" name="status" value={status} onChange={(event)=>handleInputStatusUserName(event)} placeholder="status" autoComplete="off"/>
            <button onClick={handelAddUserName}>Add</button>
            <button onClick={handelEditUserName}>Edit</button>
            <table border='1' cellPadding='10' cellSpacing='0' style={{margin: '1rem auto'}}>
                    <thead>
                        <th>Stt</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </thead>
                    {
                        data.map((item, array, index) => {
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        <button onClick={()=>handleOnClickEditUserName(item)}>Edit</button>
                                        <button onClick={()=>handleOnclickDeleteUserName(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
            </table>
        </>
    )
}
const mapStateToProps = state => {
    console.log("State = ", state)
    return{
        todoReducer: state.todo,
    }
}
const mapDistchToProps = dispatch => {
    return{
        handleAddUserTodo: (data) => dispatch(addUserTodo(data)),
        handleDeleteUserTodo: (data) => dispatch(deleteUserTodo(data)),
        handleEditUserName: (data) => dispatch(editUserTodo(data))
    }
}
export default connect(mapStateToProps, mapDistchToProps)(TodoList);