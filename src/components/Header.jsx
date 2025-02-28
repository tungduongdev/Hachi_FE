"use client"; 

import React from 'react'
import { useState, useEffect } from 'react'
import Link from 'next/link'

function Header() {
  const [menu, setOpenMenu] = useState(false)

  useEffect(() => {
    const btn = document.getElementById('click_btn')
    const handleClick = () => setOpenMenu((prev) => !prev)
    if(btn) {
      btn.addEventListener('click', () => handleClick())
    }
    return () => {
      if(btn) btn.removeEventListener('click', handleClick)
    }
  }, [])
  return (
    <header className="main-header">
    <div className="container">
      <div className="logo">
        <img src="/asset/download.jpg" width="50px" height="50px" alt="anh1"/>
      </div>
      <div className="hidden-menu">
        <button id="click_btn" className="hidden-menu-btn">
          <span>...</span>
        </button>
      </div>
      <div className="menu">
        <ul className="menu-list">
          <li>Home</li>
          <li>Shop</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Features</li>
          <li>Document</li>
          <Link href={"/login"}><li>PURCHASE</li></Link>
        </ul>
      </div>
      <div className="none">
      </div>
      <div id="menu" className={`menu-items-rp ${menu ? 'active' : 'hidden'}`}>
        <ul className="menu-list-rp active">
          <li>Home</li>
          <li>Shop</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Features</li>
          <li>Document</li>
          <li>PURCHASE</li>
        </ul>
      </div>
    </div>
  </header>
  )
}

export default Header