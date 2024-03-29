import React from 'react';
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";
import {Content} from "./Content";
import {Error404} from "./Error404";

type PagePropsType = {
    pages: Array<PagesType>
}


export const Page = (props: PagePropsType) => {
    const param = useParams()
    // console.log('params: ', Number(param.id))

    return (

        props.pages.length > Number(param.id)
            ? <Content heading={props.pages[Number(param.id)].heading} pages={props.pages[Number(param.id)].about}/>
            : <Error404/>
        // <div>
        //     <div>
        //         {props.pages[Number(param.id)].heading}
        //     </div>
        //     <div>
        //         {props.pages[Number(param.id)].about}
        //     </div>
        // </div>
    );
};

