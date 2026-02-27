export default function Pricing() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                
                {/* Left Text Section */}
                <div className="col-12 col-md-5 p-3 text-center text-md-start mb-4 mb-md-0">
                    <h1 className="mb-3 fs-2">Unbeatable Pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India. 
                        Flat fees and no hidden charges.
                    </p>
                    <a href="#" style={{ textDecoration: "none" }}>
                        Try Kite <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                </div>

                {/* Right Pricing Cards */}
                <div className="col-12 col-md-7">
                    <div className="row text-center g-3">
                        
                        <div className="col-12 col-sm-6">
                            <div className="p-3 border h-100 rounded">
                                <h1 className="mb-3">
                                    <i className="fa-solid fa-indian-rupee-sign"></i>0
                                </h1>
                                <p>
                                    Free equity delivery <br />
                                    & direct mutual funds
                                </p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6">
                            <div className="p-3 border h-100 rounded">
                                <h1 className="mb-3">
                                    <i className="fa-solid fa-indian-rupee-sign"></i>20
                                </h1>
                                <p>Intraday and F&O</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
