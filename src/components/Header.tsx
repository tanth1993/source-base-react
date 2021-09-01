import * as React from 'react';

interface IHeader {
    name?: string
}
export const Header: React.FC<IHeader> = props => {
    const { name } = props
    const render = () => {
        // function forNow() {
        //     for (let i = 0; i < 1000; i++) {
        //         console.log('11')
        //     }
        // }
        // forNow()
        return <div className="">{name || 'Header'}</div>
    }
    const onClick = () => {

        console.log(process.env.ENVIRONMENT)
        console.log('new h')
    }

    return <div className="" style={{ padding: 50 }}>
        {render()}

        <button onClick={onClick}> CLick</button>
    </div>
}