import Hero from "./Hero";
import Stats from "./Stats";
import Awards from "./Awards";
import Education from "./Education";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";



export default function HomePage(){
    return (
        <>
            
            <Hero />
            <Awards />
            <Stats />
            <Pricing />
            <Education />
            <OpenAccount />

        </>
    );
}