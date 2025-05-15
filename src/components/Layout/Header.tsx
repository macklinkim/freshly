import * as React from 'react';
const userName = 'Macklin'
const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 px-4'>
            <h2 className="text-xl font-bold">
                Hello{userName}
            </h2>
            <div className='flex items-center gap-6'>

                Header
            </div>
        </header>
    )
}

export default Header