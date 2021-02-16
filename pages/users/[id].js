import React from 'react';
import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer";

const User = ({user}) => {
    const {query} = useRouter()
    return (
        <MainContainer title={user.name}>
            Пользователь с id {query.id}
            <h1>{user.name}</h1>
        </MainContainer>
    );
};

export default User;

export async function getServerSideProps(context) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/` + context.params.id)
    const user = await res.json()


    return { props: { user } }
}
