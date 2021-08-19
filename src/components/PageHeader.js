import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';

function PageHeader(props){
    return (
        <div className='page-header'>
            <Logo />
            <SearchBar />
        </div>
    );
}

export default PageHeader;