import "./css/UserList.css"

function UserCard({onCloseClick, userId, userName, userAge})
{
    return(
        <>
            <div className="UserCard">
                <p>ID: {userId} User name: {userName} User age: {userAge} <button className='close-button' onClick={()=>{onCloseClick(userId)}}>&times;</button></p>
            </div>
        </>
    )
}

export default UserCard;