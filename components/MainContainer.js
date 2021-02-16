import React from 'react';
import A from "./A";
import Head from "next/head";


const MainContainer = ({children, title}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <div className={'navbar'}>
                <A href={'/'} title={'Главная страница'}/>
                <A href={'/users'} title={'Пользователи'}/>

            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                  .navbar {
                    background: orange;
                    padding: 15px;
                  }
                `
                }
            </style>
        </>
    );
};

export default MainContainer;
