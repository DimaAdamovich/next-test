import React from 'react';
import A from "../components/A";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

    return (
        <MainContainer title={'Пользователи'}>
            <h1>Пользователи</h1>
            <ul>
                {
                    users.map(user =><li key={user.id}>
                        <A title={user.name} href={'/users/' + user.id}/>


                    </li>)
                }
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {
            users
        }, // will be passed to the page component as props
    }
}
