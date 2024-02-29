import React, {useState} from "react";
import {connect} from 'react-redux';
import {getListUser, addUser, deleteUser, editUser} from './Action';
import {selectListUser, selectIsLoading} from './Selectors'
const ManageUser = (props) => {
    const [nameTodo, setNameTodo] = useState('');
    const [numberTodo, setNumberTodo] = useState('');
    const [addressTodo, setAddressTodo] = useState('');
    const [emailTodo, setEmail] = useState('');
    const [currenTodo, setCurrenTodo] = useState('');
    const {
        handleGetListUser,  
        handleAddUser, 
        handleDeleteUser, 
        handleEditUser,
        listUser,
        isLoading
    } = props;

    const handleChangeNameTodo = (event) => {
        const value = event.target.value;
        setNameTodo(value);
    }
    const handleChangeEmailTodo = (event) => {
        const value = event.target.value;
        setEmail(value);
    }
    const handleChangeNumberTodo = (event) => {
        const value = event.target.value;
        setNumberTodo(value)
    }
    const handleChangeAddressTodo = (event) => {
        const value = event.target.value;
        setAddressTodo(value)
    }
    
    const onClickAddTodo = () => {
        if(nameTodo && emailTodo && numberTodo && addressTodo){
            handleAddUser({
                name: nameTodo,
                phone: numberTodo,
                email: emailTodo,
                address: addressTodo
            })
        }
        setNameTodo('')
        setNumberTodo('')
        setEmail('')
        setAddressTodo('')
    }

    // Delete username 
    const onClickDelete = (id) => {
        handleDeleteUser(id)
    }


    const onClickEdit = (item) => {
        const {name, phone, email, address} = item;
        setNameTodo(name);
        setNumberTodo(phone);
        setEmail(email);
        setAddressTodo(address);
        setCurrenTodo(item);
    }
    const onClickEditTodo = () => {
        const newTodo = {
            ...currenTodo,
            name: nameTodo,
            email: emailTodo,
            phone: numberTodo,
            address: addressTodo
        }
        handleEditUser(newTodo)
        setEmail('')
        setNameTodo('')
        setAddressTodo('')
        setNumberTodo('')
    }

    const handleOnclickGetListUser = () => {
        handleGetListUser()
    }

    return(
        <>
            <h2>Saga</h2>
            <h2>Username: {nameTodo}</h2>
            <h2>Email: {emailTodo}</h2>
            <input
                type="text"
                name="name"
                value={nameTodo}
                onChange={(event) => handleChangeNameTodo(event)}
                placeholder="name"
                autoComplete="off"/>
            <input
                type={"number"}
                name="number"
                value={numberTodo}
                onChange={(event) => handleChangeNumberTodo(event)}
                placeholder="Number"
                autoComplete="off"/>
            <input
                type="email"
                name="email"
                value={emailTodo}
                onChange={(event) => handleChangeEmailTodo(event)}
                placeholder="Email"
                autoComplete="off"/>
            <input
                type="text"
                name="address"
                value={addressTodo}
                onChange={(event) => handleChangeAddressTodo(event)}
                placeholder="Address"
                autoComplete="off"/>

            <button onClick={onClickAddTodo}>AddTodo</button>
            <button onClick={onClickEditTodo}>EditTodo</button>
            <button onClick={handleOnclickGetListUser}>Get List User</button>

            {
                isLoading ? (<h1>Loading...</h1>) :
                (
                    <table border='1' cellPadding='10' cellSpacing='0' style={{margin: '1rem auto'}}>
                        <thead>
                            <th>Stt</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </thead>
                        {
                            listUser.map((item, array, index) => {
                                return(
                                    <tbody>
                                        <tr key={+item.id}>
                                            <td>{+item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.email}</td>
                                            <td>{item.address}</td>
                                            <td>
                                                <button onClick={()=>onClickEdit(item)}>Edit</button>
                                                <button onClick={()=>onClickDelete(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })
                        }
                    </table>
                )
            }
        </>
    )
}
const mapStateToProps = (state) => {
    return{
        // manageGetListUser: state.manage
        listUser: selectListUser(state),
        isLoading: selectIsLoading(state)
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        handleGetListUser: () => dispatch(getListUser()),
        handleAddUser: (data) => dispatch(addUser(data)),
        handleDeleteUser: (data) => dispatch(deleteUser(data)),
        handleEditUser: (data) => dispatch(editUser(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ManageUser);