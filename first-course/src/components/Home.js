export default function Home(){
    const h1 = <h3>Hello react!</h3>;
    console.log(h1);
    return(
        <>
        <div id={'main-container-home'}>
            {h1}
        </div>
        </>
    )
}