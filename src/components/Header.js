import { Sidebar } from "./Sidebar"

function Header() {
    return (
        <header className='header'>
            <nav>
                <div>LOGO</div>
                <ul>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                    <li>home</li>
                </ul>
                <Sidebar />
            </nav>
        </header>
    )
}

export default Header