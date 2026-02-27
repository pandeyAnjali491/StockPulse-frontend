export default function Team() {
    return (
        <div className="container">
            <div className="row pt-5 border-top">
                <h1 className="text-center">People</h1>
            </div>
            <div className="row p-2 mt-3 p-md-5">
                <div className="col-12 col-md-6 text-center">
                    <img src="media/images/pic.png" alt="CEO" className="img-fluid " style={{borderRadius:"100%", width:"50%"}}/>
                    <h4 className="mt-2">Anjali Pandey</h4>
                    <h5>Creator</h5>
                </div>
                <div className="col-12 col-md-6 mt-3 mt-md-0 p-md-3" style={{lineHeight:"1.8"}}>
                    <p>This project was created by Anjali Pandey with the vision of making the trading process easier to understand for learners and aspiring investors.</p>

                    <p>The goal is to design a user-friendly, transparent, and educational platform that highlights how technology can improve financial accessibility and awareness.</p>

                    <p>Beyond development, Anjali is passionate about technology and learning new tools that bridge the gap between coding and real-world problem-solving.</p>

                    <p>Connect on <a className="about-a" href="/">Linkedin</a> / <a className="about-a" href="/">TradingQnA</a> / <a className="about-a" href="/">gmail</a></p>
                </div>
            </div>
        </div>
    );
}