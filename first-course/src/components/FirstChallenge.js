
import Header from "./FirstChallenge/Header";
import Body from "./FirstChallenge/Body";
import Navbar from "./FirstChallenge/Navbar";
import Footer from "./FirstChallenge/Footer";



export default function FirstChallenge(){
    return (
        <>
        <div id={'first-challenge-main-container'}>
            <div id={'header-container'}>
                <Navbar/>
                <Header/>
            </div>
            <Body/>
            <Footer/>
        </div>
        </>
    )
}