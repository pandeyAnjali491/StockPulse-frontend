import { Link } from "react-router";

export default function OpenAccount() {
    return (
         <div className="container p-5 mb-5">
            <div className="row text-center">
            <h1 className="mt-5 ">Open a StockPulse account</h1>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Link to="/auth"><button className="p-2 btn btn-primary fs-5 btn-md-25 w-50" style={{margin:"auto"}}>Signup Now</button></Link>
            </div>
        </div>
    );
}   