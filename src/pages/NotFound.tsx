import React from 'react'
import {useNavigate} from "react-router";

type propsNotFoundType = {}

const NotFound = (props: propsNotFoundType) => {

    const back=useNavigate()

    return (
        <div>
               This page doesn't exist
            <button onClick={() => back('-1')}>Return</button>
        </div>
    )
}

export default NotFound