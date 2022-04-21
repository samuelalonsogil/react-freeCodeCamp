export default function SecondComponent(){
    return(
        <>
        <div id={'navbar-component-second'}>
            <nav id={'nav'}>
                <h2>Samu's page</h2>
                <ul id={'unordered-list-nav'}>
                    <li><a href={'/pricing'}>Pricing</a></li>
                    <li><a href={'/about'}>About</a></li>
                    <li><a href={'/contact'}>Contact</a></li>
                </ul>
            </nav>
        </div>
        </>
    )
}