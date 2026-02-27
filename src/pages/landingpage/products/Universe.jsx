import { Link } from "react-router";

export default function Universe() {
    return (
        <div className="container mt-5">
            <div className="row text-center ">
                <h1>The StockPulse Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="row mt-3">
                    <div className="col-12 col-sm-4">
                        <img src="/media/images/smallcaseLogo.png" alt="Smallcase" className="p-3 img-fluid" style={{height:"4rem"}} />
                        <p className="text-small text-muted">Thematic investing platform</p>
                    </div>
                    <div className="col-12 col-sm-4">
                        <img src="/media/images/streakLogo.png" alt="Streak" className="p-3 img-fluid" style={{height:"4rem"}}/>
                        <p className="text-small text-muted">Algo & strategy platform</p>
                    </div>
                    <div className="col-12 col-sm-4">
                        <img src="/media/images/sensibullLogo.svg" alt="Sensibull" className="p-3 img-fluid" style={{height:"4rem"}} />
                        <p className="text-small text-muted">Options trading platform</p>
                    </div>

                </div>

                <div className="row mt-4">
                    <div className="col-12 col-sm-4">
                        <img src="/media/images/zerodhaFundhouse.png" alt="Zerodha Fundhouse" className="p-3 img-fluid" style={{height:"4rem"}} />
                        <p className="text-small text-muted">Asset management</p>
                    </div>
                    <div className="col-12 col-sm-4">
                        <img src="/media/images/goldenpiLogo.png" alt="GoldenPi" className="p-3 img-fluid" style={{height:"4rem"}} />
                        <p className="text-small text-muted">Bonds trading platform</p>
                    </div>
                    <div className="col-12 col-sm-4">
                        <img src="/media/images/dittoLogo.png" alt="Ditto" className="p-3 img-fluid" style={{height:"4rem"}} />
                        <p className="text-small text-muted">Insurance</p>
                    </div>
                </div>
                <div className="row mt-3 p-5">
            <Link to="/auth"><button className="p-2 btn btn-primary fs-5 btn-md-25 w-50" style={{margin:"auto"}}>Signup Now</button></Link>
                </div>
            </div>
        </div>
    );
}
