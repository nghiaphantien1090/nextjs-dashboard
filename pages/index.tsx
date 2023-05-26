import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import dynamic from "next/dynamic";
import { useState } from 'react';
export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='container'>
      <button onClick={handleClick}>click</button>
      <div className={`parent ${isActive ? 'active' : ''}`}>
        <div className='child'>child</div>
        <div className='child'>child</div>
        <div className='child'>child</div>
        <div className='child'>child</div>
        <div className='child'>child</div>
        <div className='child'>child</div>
      </div>
    </div>
  );
}
