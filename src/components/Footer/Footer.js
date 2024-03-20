import "./Footer.css"
import Image from 'next/image'
import Link from 'next/link'
import copyright from "@/public/copyright.png"

export default function Footer(){
    
    return (
        <footer>
            <Link href="/cgu">CGU</Link>- 
            <Link href="/mentions-legales">Mentions légales</Link>
            | Copyright <Image src={copyright} className="copyright_img"/> Tous droits réservés
        </footer>
    )
}