import React from 'react'

function Container({children}){
    return<div className='w-full max-w-7xl mx-auto px-20'>{children}</div>;
}

export default Container

// container aapki proprties except krta hai as a children
// container is box usme styling properties display krte hai