"use client"
import React, {useRef} from "react"
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/logo.png"
import "@/src/components/Header/Header.css"
import menuHamburger from "@/public/menu.png"

export default function Header(){

    const menuContainer = useRef(null);

    function openMenu(){
        menuContainer.current.dataset.collapse = true;
    }
    function closeMenu(){
        menuContainer.current.dataset.collapse = false;
    }

    return (
        <header className="main-header">
            <div>
                <Link href="/"><Image className="logo" src={logo} alt="main logo"/></Link>
            </div>
            <div className="menu_container" ref={menuContainer} data-collapse={false}>
                <ul>
                    <div className="mobile close_container"><span onClick={closeMenu}>&times;</span></div>
                    <Link onMouseUp={closeMenu} href="/#quiSuisJeSection"><li>Qui suis-je ?</li></Link>
                    <Link onMouseUp={closeMenu} href="/#servicesSection"><li>Mes services</li></Link>
                    <Link onMouseUp={closeMenu} href="/#lexique"><li>Lexique</li></Link>
                    <Link onMouseUp={closeMenu} href="/contact"><li>Contact</li></Link>
                </ul>
            </div>
            <div className="mobile" onClick={openMenu}>
                <Image src={menuHamburger} className="mobileMenuTriggerer"/>
            </div>
        </header>
    )
}