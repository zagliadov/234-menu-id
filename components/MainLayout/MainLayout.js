import Head from 'next/head';
import {
    Flex,
} from '@chakra-ui/react';


export const MainLayout = ({ children, title = 'Next App' }) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content='Home' />
                <meta name='description' content='next title' />
                <meta charSet='utf-8' />
            </Head>
            <Flex bgColor='#FFFFFF' h='100vh'>
                {children}
            </Flex>

            <style jsx>{`
                nav {
                    position: fixed;
                    height: 60px;
                    top: 0;
                    left: 0;
                    right: 0;
                    background: darkblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                nav a {
                    color: white;
                    text-decoration: none;
                }
                main {
                    margin-top: 60px;
                    padding: 1rem;
                }
            `}</style>
        </>
    )
}