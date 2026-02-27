export default function Education() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">

                {/* Left Image Section */}
                <div className="col-12 col-md-5 p-3 text-center">
                    <img 
                        src="media/images/education.svg" 
                        alt="Education" 
                        className="img-fluid"
                    />
                </div>

                {/* Right Text Section */}
                <div className="col-12 col-md-7 p-3 text-center text-md-start">
                    <h1 className="mb-3 fs-2">Free and open market education</h1>
                    
                    <p>
                        <strong>Varsity</strong>, the largest online stock market education book in the world, 
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href="#" className="d-block mb-3" style={{ textDecoration: "none" }}>
                        Varsity <i className="fa-solid fa-arrow-right-long ms-2"></i>
                    </a>

                    <p>
                        <strong>Trading Q&A</strong>, the most active trading and investment community in India 
                        for all your market-related queries.
                    </p>
                    <a href="#" className="d-block" style={{ textDecoration: "none" }}>
                        Trading Q&A <i className="fa-solid fa-arrow-right-long ms-2"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}
