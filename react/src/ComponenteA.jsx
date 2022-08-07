import React, { Children } from "react";

function ComponenteA() {
    
    return (
        <div>ComponenteA
            <div>{props.children}</div>
        </div>
    )
}

export default ComponenteA