import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection 
                imgUrl="/media/images/kite.png"
                productName="Kite"
                productDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
                link1="Try Demo"
                link2="Learn More"
                googlePlay=""
                appStore=""
            />
            <RightSection 
                imgUrl="/media/images/console.png"
                productName="Console"
                productDesc="The central dashboard for your StockPulse account. Gain insights into your trades and investments with in-depth reports and visualisations."
                link1="Learn More"
                link2=""
                googlePlay=""
                appStore=""
            />

            <LeftSection 
                imgUrl="/media/images/coin.png"
                productName="Coin"
                productDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
                link1="Coin"
                link2=""
                googlePlay=""
                appStore=""
            />
            <RightSection 
                imgUrl="/media/images/kiteconnect.png"
                productName="Kite Connect API"
                productDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
                link1="Kite Connect"
                link2=""
                googlePlay=""
                appStore=""
            />

            <LeftSection 
                imgUrl="/media/images/varsity.png"
                productName="Varsity mobile"
                productDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
                link1=""
                link2=""
                googlePlay=""
                appStore=""
            />
            <p className="text-center mb-5">Want to know more about our technology stack? Check out the StockPulse.tech blog.</p>
            <Universe />
        </>
    );
}