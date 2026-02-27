export default function Brokerage() {
    return (
        <div className="container">
            <div className="row p-5 mt-5 border-top">
                <div className="col-12 col-md-8 p-md-4">
                <a href="" className="about-a text-center"><h3 className="fs-5">Brokerage calculator</h3></a>
                </div>
                 <div className="col-12 col-md-4 p-4 d-none d-md-block">
                <a href="" className="about-a"><h3 className="fs-5">List of charges</h3></a>
                </div>
            </div>
            <div className="row ">
                <div className="col-12 col-md-8 ">
                    
                    <ul className="text-muted mt-3" style={{ lineHeight: "2.5", fontSize: "14px" }}>
                        <li>
                            Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                            GST per order.
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md-4 ">
                    
                    <ul className="text-muted mt-md-3" style={{ lineHeight: "2.5", fontSize: "14px" }}>
                        <li style={{ listStyle: "none" }}>
                            <button className="btn btn-sm" style={{color:"white",backgroundColor:"#4caf50",opacity:"1"}} disabled>Free*</button>
                        </li>
                    </ul>
                </div>
                </div>

                <div className="row ">
                    <div className="col-12 col-md-8 ">
                        
                        <ul className="text-muted mt-3" style={{ lineHeight: "2.5", fontSize: "14px" }}>
                            <li>Digital contract notes will be sent via e-mail.</li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        
                        <ul className="text-muted mt-md-3" style={{ lineHeight: "2.5", fontSize: "14px" }}>
                            <li style={{ listStyle: "none" }}>
                               <button className="btn btn-sm" style={{color:"white",backgroundColor:"#4caf50",opacity:"1"}} disabled>Free*</button>
                            </li>
                        </ul>
                    </div>
                </div>

                 <div className="row ">
                    <div className="col-12 col-md-8 ">
                        
                        <ul className="text-muted mt-3" style={{ lineHeight: "2.5", fontSize: "14px" }}>
                             <li>
                            Physical copies of contract notes, if required, shall be charged
                            ₹20 per contract note. Courier charges apply.
                        </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        
                        <ul className="text-muted mt-md-3" style={{ lineHeight: "2.5", fontSize: "14px" }}>
                            <li style={{ listStyle: "none" }}>
                                <button className="btn btn-sm" style={{color:"white",backgroundColor:"#4caf50",opacity:"1"}} disabled>Free*</button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-8">
                        
                        <ul className="text-muted mt-3" style={{ lineHeight: "2.5", fontSize: "14px" }}>
                        <li>
                            For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                            equity (whichever is lower).
                        </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        
                        <ul className="text-muted mt-md-3 " style={{ lineHeight: "2.5", fontSize: "14px" }}>
                            <li style={{ listStyle: "none" }}>
                                <button className="btn btn-sm" style={{color:"white",backgroundColor:"#4caf50",opacity:"1"}} disabled>Free*</button>
                            </li>
                        </ul>
                    </div>
                </div>

                  <div className="row">
                    <div className="col-12 col-md-8 ">
                        
                        <ul className="text-muted mt-3" style={{ lineHeight: "2.5", fontSize: "14px" }}>
                        <li>
                            For NRI account (PIS), 0.5% or ₹200 per executed order for equity
                            (whichever is lower).
                        </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 ">
                        
                        <ul className="text-muted mt-md-3 " style={{ lineHeight: "2.5", fontSize: "14px" }}>
                            <li style={{ listStyle: "none" }}>
                                <button className="btn btn-sm" style={{color:"white",backgroundColor:"#4caf50",opacity:"1"}} disabled>Free*</button>
                            </li>
                        </ul>
                    </div>
                </div>

                  <div className="row ">
                    <div className="col-12 col-md-8 ">
                        
                        <ul className="text-muted mt-3" style={{ lineHeight: "2.5", fontSize: "14px" }}>
                        <li>
                            If the account is in debit balance, any order placed will be
                            charged ₹40 per executed order instead of ₹20 per executed order.
                        </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 ">
                        
                        <ul className="text-muted mt-md-3 " style={{ lineHeight: "2.5", fontSize: "14px" }}>
                            <li style={{ listStyle: "none" }}>
                                <button className="btn btn-sm" style={{color:"white",backgroundColor:"#4caf50",opacity:"1"}} disabled>Free*</button>
                            </li>
                        </ul>
                    </div>
                </div>                        
                       
            </div>
    );
}
