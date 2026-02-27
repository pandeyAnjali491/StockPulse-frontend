import { Link } from "react-router";

export default function Hero() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="hero image" className="mb-5" />
            <h1 className="mt-5 ">Invest in everything</h1>
            <p>online platform to invest in stocks , derivatives , mutual funds and more</p>
            <Link to="/auth"><button className="p-2 btn btn-primary fs-5 btn-md-25 w-50" style={{margin:"auto"}}>Signup Now</button></Link> 
            </div>
        </div>
    );
}