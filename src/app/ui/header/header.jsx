import Link from "next/link";
import './header.css'
import Image from "next/image";
import TotemLogo from "@/app/statyc/TotemLogo.jpeg"

export default function Header() {
    return (
        <header>
            <div className="Logo">
                <Image 
                    src={TotemLogo} 
                    width={100}
                    height={100}
                    alt="Logo Totem"
                />
            </div>
            <nav className="menu">
                <ul className="menu_list">
                    <li className="menu_list_item">
                        <Link className="menu-link" href={'/'}>Home</Link>
                    </li>
                    <li className="menu_list_item">
                        <Link className="menu-link" href={'/tienda'}>tienda</Link>
                    </li>
                    <li className="menu_list_item">
                        <Link className="menu-link" href={'/tienda'}>Sobre nosotros</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}