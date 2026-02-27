export default function Hero() {
    return (
        <section className="container-fluid bg-light pb-5">
            <div className="container">
            <div className="p-5" id="support-wrapper">
                <h1 style={{fontWeight:"630"}}>Support Portal</h1>
                <button style={{backgroundColor:"rgb(56,126,209)"}}className="btn btn-primary" href="">Track Tickets</button>
            </div>
             <div className="row px-5">
                <input  style={{height:"3.5rem",padding:"30px"}}className="form-control" placeholder="Eg: How do I open my account, How do i activate F&O..." />
            </div>
            </div>
        </section>
    );
}
