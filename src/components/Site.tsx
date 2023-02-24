import React, {useEffect, useState} from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import styles from './Site.module.css'
import {PageOne} from "./pages/PageOne";
import {PageTwo} from "./pages/PageTwo";
import {PageThree} from "./pages/PageThree";
import {Error404} from "./pages/Error404";
import {Page} from "./pages/Page";
import {dataState} from "../dataState/dataState";
import {useWindowSize} from "../helpers/useWindowSize";


export const Site = () => {
    // function useWindowSize() {
    //     const [windowSize, setWindowSize] = useState(0)
    //     useEffect(() => {
    //         function handleResize() {
    //             setWindowSize(window.innerWidth)
    //         }
    //
    //         window.addEventListener('resize', handleResize)
    //         handleResize()
    //         return () => window.removeEventListener('resize', handleResize)
    //     }, [])
    //     return windowSize
    // }

    const windowSize = useWindowSize()
    console.log(windowSize)

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                {windowSize > 700
                    ? <div className={styles.nav}>
                        <div><NavLink to={'/page/0'}
                                      className={({isActive}) => isActive ? styles.active : styles.navLink}>PAGE
                            1</NavLink></div>
                        <div><NavLink to={'/page/1'}
                                      className={({isActive}) => isActive ? styles.active : styles.navLink}>PAGE
                            2</NavLink></div>
                        <div><NavLink to={'/page/2'}
                                      className={({isActive}) => isActive ? styles.active : styles.navLink}>PAGE
                            3</NavLink></div>
                        {/*<div><NavLink to={'/page3'} className={({isActive})=>isActive ?styles.active : styles.navLink}>PAGE 3</NavLink></div>*/}
                        {/*<div><a href='/page3'>PAGE 3 AHREF</a></div>*/}
                    </div>
                    : <div></div>
                }

                <div className={styles.content}>
                    <Routes>
                        <Route path={'/'} element={<Navigate to={'/page/0'}/>}/>

                        <Route path={'/page/:id'} element={<Page pages={dataState.pages}/>}/>

                        {/*<Route path={'/page2'} element={<PageTwo/>}/>*/}
                        {/*<Route path={'/page3'} element={<PageThree/>}/>*/}

                        <Route path={'/*'} element={<Error404/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

