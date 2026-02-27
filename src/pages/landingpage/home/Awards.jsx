export default function Awards() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">

                {/* Image Section */}
                <div className="col-12 col-md-6 p-3 p-md-5 text-center">
                    <img
                        src="media/images/largestBroker.svg"
                        alt="award"
                        className="img-fluid"
                    />
                </div>

                {/* Text Section */}
                <div className="col-12 col-md-6 p-3 p-md-5 text-center text-md-start">
                    <h3 className="mb-3">A Trading Simulation Platform for Learning and Exploration</h3>
                    <p className="mb-4">
                        StockPulse is a student-developed project created to help learners and beginners understand how online trading platforms work.<br />
                        It allows users to simulate real-world trading by exploring features like order placement, portfolio tracking, and data visualization — all in a simplified and educational environment.
                    </p>
                    <h5>Features:</h5>
                    <div className="row mb-4">
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li>Futures</li>
                                <li>Commodities</li>
                                <li>Currency</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="list-unstyled">
                                <li>Stocks & IPOs</li>
                                <li>Mutual Funds</li>
                                <li>Bonds</li>
                            </ul>
                        </div>
                    </div>

                    <img
                        src="media/images/pressLogos.png"
                        alt="Press logos"
                        className="img-fluid"
                        style={{ maxWidth: "90%" }}
                    />
                </div>
            </div>
        </div>
    );
}
