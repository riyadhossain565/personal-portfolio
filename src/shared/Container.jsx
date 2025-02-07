import React from 'react';

const Container = ({children}) => {
    return (
        <div className="max-w-screen-2xl mx-auto xl:px-28 md:px-16 sm:px-6 px-8">
            {children}
        </div>
    );
};

export default Container;