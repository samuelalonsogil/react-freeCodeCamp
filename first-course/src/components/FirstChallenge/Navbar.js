export default function Navbar(){
    return (
        <nav id={'nav'}>
            <ul id={'unordered-list-nav'}>
                <li><a href={'/pricing'}>Pricing</a></li>
                <li><a href={'/about'}>About</a></li>
                <li><a href={'/contact'}>Contact</a></li>
            </ul>
        </nav>
    )
}