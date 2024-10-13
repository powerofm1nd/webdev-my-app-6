import './css/UserList.css';
import { useState } from 'react'
import UserCard from './UserCard';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function UserList() {
    const [users, SetUsers] = useState([])

    function onAddUserClick() {
        fetch("https://randomuser.me/api/")
          .then(response => response.json())
          .then(data => {
            SetUsers(prevUsers => {
                const apiUser = data.results[0]        
                let newUser = { };
                newUser.id = apiUser.login.uuid
                newUser.name = apiUser.name.first
                newUser.age = apiUser.dob.age
                const updatedUsers = [...prevUsers, newUser];
                console.log(updatedUsers);
                return updatedUsers;
            });
          })
          .catch(error => console.error('Error fetching data:', error));
    }

    function onCloseCardClick(id)
    {
        SetUsers(users.filter((user)=> {
            return user.id !==  id
        }))
    }

    return (
        <>
            <button className='my-button' onClick={onAddUserClick}>Get new user</button>
            <TransitionGroup>
                {users.map((user, index) => {
                    return (
                        <CSSTransition key={user.id} timeout={500} classNames='item' >
                            <UserCard onCloseClick={onCloseCardClick} userId={user.id} userName={user.name} userAge={user.age} />
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </>
    );
}

export default UserList;