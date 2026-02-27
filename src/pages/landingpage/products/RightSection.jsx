export default function RightSection({
    imgUrl,
    productName, 
    productDesc,
    link1, 
    link2
}) {
    return (
         <div className="container">
            <div className="row p-5">
                <div className="col-12 col-md-6 p-5">
                <h1>{productName}</h1>
                <p>{productDesc}</p>
                <div className="d-flex flex-wrap justify-content-space-between align-items-center gap-3">
                    <a className="about-a" href="">{link1} {link1 && <i className="fa-solid fa-arrow-right-long"></i>}</a>
                    <a className="about-a" href="">{link2}{link2 && <i className="fa-solid fa-arrow-right-long"></i>}</a>
                </div>
                </div>
                <div className="col-12 col-md-6">
                    <img src={imgUrl} alt={productName} className="img-fluid" />
                </div>
        </div>
        </div>
    );
}
