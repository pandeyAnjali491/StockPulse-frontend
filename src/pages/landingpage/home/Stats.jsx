export default function Stats() {
    return (
        <div className="container pt-lg-0 py-3">
            <div className="row align-items-center py-3 py-md-5">
                {/* text section */}
                <div className="col-12 col-md-6 p-3 p-md-5 text-center text-md-start">
                    <h1 className="fs-2 mb-4">Why Choose StockPulse?</h1>

                    <h2 className="fs-5">Simple and Transparent</h2>
                    <p className="text-muted">
                        Built with clarity and simplicity in mind, StockPulse provides users with an easy-to-use interface for exploring trading concepts.
                    </p>

                    <h2 className="fs-5">No Clutter or Distraction</h2>
                    <p className="text-muted">
                        The platform avoids unnecessary complexity and focuses on clean design and functionality for better learning and understanding.
                    </p>

                    <h2 className="fs-5">Integrated Learning Environment</h2>
                    <p className="text-muted">
                        StockPulse is not just a trading simulation — it’s an educational tool that connects trading with practical insights.
                    </p>

                    <h2 className="fs-5">Learn by Doing</h2>
                    <p className="text-muted">
                        The project encourages users to analyze, trade, and experiment safely while learning how market systems work in real time.
                    </p>
                </div>

                {/* image section */}
                <div className="col-12 col-md-6 p-3 p-md-5 text-center">
                    <img src="media/images/ecosystem.png" className="img-fluid mb-4" alt="Ecosystem" />
                    <div>
                        <a href="#" className="mx-3 d-block d-md-inline" style={{ textDecoration: "none" }}>
                            Explore our products <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                        <a href="#" className="d-block d-md-inline" style={{ textDecoration: "none" }}>
                            Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
