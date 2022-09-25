import React, { useState } from 'react';

function HookObj(props) {
    const [person,setPerson]=useState({name:"abhi",address:"ghosh"})
    return (
        <div>
            {person.name}
        </div>
    );
}

export default HookObj;