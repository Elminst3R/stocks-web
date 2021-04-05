import React, { useState, useEffect } from 'react';

function Header(props) {
  return (
    <div className={'w-full p-5 bg-blue-200 border-b-2 border-blue-400'}>

      <h1 className={'tex-xl font-bold text-center text-blue-600 tracking-wider uppercase'}>Paper Trader</h1>

    </div>
  );
}

export default Header;