import { Container, Typography } from "@mui/material";
import Layout from "../components/Layout";
import Spacebox from "../components/styles/Spacebox";
import Grid from "../components/styles/Grid";
import Masonry from "react-masonry-css";
import CustomButton from "../components/styles/Custombutton";
import '../css/home.css'
import HorizontalScroll from "../components/HorizonalScroll";
import TradingView from "../components/TradingView";
import { useState } from "react";
import Flexbox from "../components/Flexbox";
import string from "../utilities/Strings";
import Footer from "../components/Footer";
import { isMobile } from "react-device-detect";

const Home = () => {

    const symbols = {
        "stocks": ["NASDAQ:NVDA|ALL", "NASDAQ:TSLA|ALL", "NASDAQ:AMD|ALL", "NASDAQ:META|ALL", "NASDAQ:NFLX|ALL", "NASDAQ:INTC|ALL", "NASDAQ:AAPL|ALL", "NASDAQ:MSFT|ALL", "NASDAQ:GOOGL|ALL"],
        "crypto": ["BITSTAMP:BTCUSD|ALL", "COINBASE:ETHUSD|ALL", "COINBASE:SOLUSD|ALL", "GEMINI:USDTUSD|ALL", "BINANCE:BNBUSD|ALL", "BITSTAMP:USDCUSD|ALL", "BITSTAMP:XRPUSD|ALL", "BITFINEX:DOGEUSD|ALL", "COINBASE:SHIBUSD|ALL"]
    }

    const [symbolType, setSymbolType] = useState('all')
    const symbolTypes = ['All assets', 'crypto', 'stocks']

    const [fullname, setFullname] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    return (
        <Layout>
            <div className="home">
                <section>
                    <Container>
                        <Spacebox padding="20px" />
                        <Grid gap="20px" grid={ isMobile ? 1: 2 } style={{ alignItems: 'center', }}>
                            <div>
                                <Typography className="thin" style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '13px' }}>Investing you can trust</Typography>
                                <Typography style={{ fontSize: isMobile ? '60px' : '60px', lineHeight: isMobile ? '60px' : '70px' }}>Investment made {!isMobile && <br />}ease</Typography>
                                <Spacebox padding="10px" />
                                {!isMobile && <CustomButton
                                    style={{ padding: '20px 60px', background: 'var(--primary)', borderRadius: '5px', color: 'white' }}
                                    handleClick={() => window.location.href = 'app.mercuryopal.com'}
                                >
                                    Start Investing
                                </CustomButton>}
                                {isMobile && <CustomButton
                                    style={{ padding: '20px 0px', background: 'var(--primary)', borderRadius: '5px', color: 'white', width: '100%' }}
                                    handleClick={() => window.location.href = 'app.mercuryopal.com'}
                                >
                                    Start Investing
                                </CustomButton>}
                            </div>
                            <Masonry
                                breakpointCols={2}
                                className="my-masonry-grid"
                                columnClassName="my-masonry-grid_column hide-on-med-and-down"
                            >
                                <div>
                                    <img src="/svgs/payment.svg" style={{ width: '50%' }} alt="" />
                                </div>
                                <div style={{ marginTop: '20px' }}>
                                    <img src="/svgs/currencies.svg" style={{ width: '50%' }} alt="" />
                                </div>
                                <div>
                                    <img src="/svgs/swap.svg" style={{ width: '50%' }} alt="" />
                                </div>
                                <div>
                                    <img src="/svgs/desktop.svg" style={{ width: '50%' }} alt="" />
                                </div>
                            </Masonry>
                        </Grid>
                        {isMobile && <Spacebox padding="10px" />}
                    </Container>
                </section>
                <section className="section pre-white grey">
                    <Container>
                        <Spacebox padding="20px" />
                        <Grid grid={isMobile ? 1 : 3} style={{ alignItems: 'center' }}>
                            <div style={{ borderRight: '1px solid #f0f0f0', padding: '20px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/svgs/Regulated.svg" alt="" />
                                </div>
                                <Spacebox padding="5px" />
                                <Typography variant="h6" textAlign="center">
                                    Regulated
                                </Typography>
                                <Spacebox padding="5px" />
                                <Typography variant="subtitle2" textAlign="center">
                                    <small>
                                        <b>Austria based and European regulated </b><br />crypto & securities broker platform
                                    </small>
                                </Typography>
                            </div>
                            <div style={{ borderRight: '1px solid #f0f0f0', padding: '20px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/svgs/Secure.svg" alt="" />
                                </div>
                                <Spacebox padding="5px" />
                                <Typography variant="h6" textAlign="center">
                                    Safe and Secure
                                </Typography>
                                <Spacebox padding="5px" />
                                <Typography variant="subtitle2" textAlign="center">
                                    <small>
                                        <b>Funds secured</b> in offline wallets.
                                        <b>Fully compliant</b> with European data,
                                        IT and money laundering security standards
                                    </small>
                                </Typography>
                            </div>
                            <div style={{ padding: '20px' }}>
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/svgs/Trusted.svg" alt="" />
                                </div>
                                <Spacebox padding="5px" />
                                <Typography variant="h6" textAlign="center">
                                    Trusted
                                </Typography>
                                <Spacebox padding="5px" />
                                <Typography variant="subtitle2" textAlign="center">
                                    <small>
                                        <b>800+ thousand happy users.</b>Excellent Trustpilot rating.
                                    </small>
                                </Typography>
                            </div>
                        </Grid>
                        <Spacebox padding="20px" />
                    </Container>
                </section>
                <section className="section pre-grey white">
                    <Container>
                        <Spacebox padding="20px" />
                        <Typography className="thin" textAlign="center" style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '13px' }}>INVEST</Typography>
                        <Spacebox padding="5px" />
                        <Typography variant="h2" style={{ fontSize: '32px', textAlign: 'center' }}>
                            All your investments. <br />
                            All on Bitpanda.
                        </Typography>
                        <Spacebox padding="20px" />
                        <Grid grid={isMobile ? 1 : 3} gap="20px" >
                            <div style={{ borderRadius: '20px', padding: '20px 20px 0px 20px' }} className="grey invest-div">
                                <Typography style={{ fontSize: '25px' }}>
                                    <b>Cryptocurrency*</b>
                                </Typography>
                                <Spacebox padding="5px" />
                                <span>Buy, sell & swap the cryptocurrencies you want anytime, anywhere.</span>
                                <Spacebox padding="10px" />
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/assets/invest-Crypto.png" alt="crypto" style={{ width: '80%' }} />
                                </div>
                            </div>
                            <div style={{ borderRadius: '20px', padding: '20px 20px 0px 20px' }} className="grey invest-div">
                                <Typography style={{ fontSize: '25px' }}>
                                    <b>Stocks*</b>
                                </Typography>
                                <Spacebox padding="5px" />
                                <span>Invest in fractions of your favourite companies without committing to a whole share</span>
                                <Spacebox padding="10px" />
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/assets/invest-stocks_2-resized.png" alt="stocks" style={{ width: '80%' }} />
                                </div>
                            </div>
                            <div style={{ borderRadius: '20px', padding: '20px 20px 0px 20px', opacity: '0.7' }} className="grey invest-div">
                                <Typography style={{ fontSize: '25px' }}>
                                    <b>EFTs*</b>
                                </Typography>
                                <Spacebox padding="5px" />
                                <span>Invest in fractions of your favourite ETFs* without committing to a whole share</span>
                                <Spacebox padding="10px" />
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/assets/efts.png" alt="efts" style={{ width: '80%' }} />
                                </div>
                            </div>
                            <div style={{ borderRadius: '20px', padding: '20px 20px 20px 20px' }} className="grey invest-div">
                                <Typography style={{ fontSize: '25px' }}>
                                    <b>Commodities*</b>
                                </Typography>
                                <Spacebox padding="5px" />
                                <span>Fortify your portfolio with commodities* and shield it against inflation</span>
                                <Spacebox padding="10px" />
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/assets/commodities.png" alt="commodities" style={{ width: '80%' }} />
                                </div>
                            </div>
                            <div style={{ borderRadius: '20px', padding: '20px 20px 20px 20px' }} className="grey invest-div">
                                <Typography style={{ fontSize: '25px' }}>
                                    <b>Crypto Indicies</b>
                                </Typography>
                                <Spacebox padding="5px" />
                                <span>Auto-invest in the whole crypto market with a single click</span>
                                <Spacebox padding="10px" />
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/assets/invest-BCI.png" alt="Crypto Index" style={{ width: '80%' }} />
                                </div>
                            </div>
                            <div style={{ borderRadius: '20px', padding: '20px 20px 20px 20px' }} className="grey invest-div">
                                <Typography style={{ fontSize: '25px' }}>
                                    <b>Precious Metals</b>
                                </Typography>
                                <Spacebox padding="5px" />
                                <span>Diversify your portfolio by investing in physically-backed precious metals</span>
                                <Spacebox padding="10px" />
                                <div style={{ textAlign: 'center' }}>
                                    <img src="/assets/Invest-Metals.png" alt="metals" style={{ width: '80%' }} />
                                </div>
                            </div>
                        </Grid>
                        <Spacebox padding="10px" />
                        <Typography textAlign="center" style={{ fontSize: '10px', color: 'grey' }}>
                            <small>*Our derivative contracts allow you to fractionally invest in stocks and ETFs that cost hundreds or thousands of euros for a single share from as little as €1. This gives you the flexibility to invest in the companies or ETFs you believe in as much as you want, or to try your hand at investing. *Stocks and ETFs are underlying assets of the contracts offered as Mercuryo Stocks and are brought to you by Mercuryo Financial Services. For more information consult the prospectus at mercuryopal.com. Capital at risk.</small>
                        </Typography>
                        <Spacebox padding="20px" />
                    </Container>
                </section>
                <section className="section pre-white grey">
                    <Container>
                        <Spacebox padding="20px" />
                        <Typography className="thin" textAlign="center" style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '13px' }}>FEATURES</Typography>
                        <Spacebox padding="5px" />
                        <Typography variant="h2" style={{ fontSize: '32px', textAlign: 'center' }}>
                            More than an investment platform
                        </Typography>
                        <Spacebox padding="10px" />
                        <div style={{ padding: "20px 20px 0px 20px", borderRadius: '20px' }} className="white">
                            <Grid grid={isMobile ? 1 : 2} gap="10px" className="feature-div">
                                <div className="feature-div">
                                    <span className="grey" style={{ padding: '10px', borderRadius: '5px', display: 'block', width: 'fit-content' }}>
                                        INVEST WITH ZERO DEPOSIT FEES
                                    </span>
                                    <Spacebox padding="10px" />
                                    <Typography variant="h2" style={{ fontSize: '25px' }}>
                                        More money in your portfolio
                                    </Typography>
                                    <Spacebox padding="5px" />
                                    <Typography>
                                        No deposit and withdrawal fees, on all payment methods for all fiat currencies. More money in your portfolio means more opportunities to grow your investments and make impactful decisions, and that's exactly what we're here for.
                                    </Typography>
                                </div>
                                <img src="/assets/payment-method.png" alt="payment-method" className="margin-auto hide-on-med-and-down" style={{ width: '60%', display: 'block' }} />
                                {isMobile && <Spacebox padding="10px" />}
                            </Grid>
                        </div>
                    </Container>
                </section>
                <section className="section pre-grey white">
                    <Container>
                        <Spacebox padding="20px" />
                        <Typography className="thin" textAlign="center" style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '13px' }}>PRICES</Typography>
                        <Spacebox padding="5px" />
                        <Typography variant="h2" style={{ fontSize: '32px', textAlign: 'center' }}>
                            Keep tabs on your favourite assets
                        </Typography>
                        <Spacebox padding="10px" />
                        <Flexbox alignItems="center">
                            {symbolTypes.map((assets, index) => (
                                <div key={index} className="asset" onClick={() => setSymbolType(assets)}>
                                    {string.capitalise(assets)}
                                </div>
                            ))}
                        </Flexbox>
                        <Spacebox padding="5px" />
                        {symbolType === 'stocks' && (
                            <HorizontalScroll>
                                {symbols.stocks.map((stock, index) => (
                                    <div style={{ minWidth: isMobile ? '75%' : '300px', borderRadius: '20px', padding: '20px', margin: '10px' }} className="grey" key={index}>
                                        <TradingView mode={'light'} symbol={stock} />
                                    </div>
                                ))}
                            </HorizontalScroll>
                        )}
                        {symbolType === 'crypto' && (
                            <HorizontalScroll>
                                {symbols.crypto.map((cryp, index) => (
                                    <div style={{ minWidth: isMobile ? '75%' : '300px', borderRadius: '20px', padding: '20px', margin: '10px' }} className="grey" key={index}>
                                        <TradingView mode={'light'} symbol={cryp} />
                                    </div>
                                ))}
                            </HorizontalScroll>
                        )}
                        {symbolType === 'all' && (
                            <HorizontalScroll>
                                {symbols.crypto.concat(symbols.stocks).map((assets, index) => (
                                    <div style={{ minWidth: isMobile ? '75%' : '300px', borderRadius: '20px', padding: '20px', margin: '10px' }} className="grey" key={index}>
                                        <TradingView mode={'light'} symbol={assets} />
                                    </div>
                                ))}
                            </HorizontalScroll>
                        )}
                    </Container>
                </section>
                <section className="section pre-white grey">
                    <Container>
                        <Spacebox padding="20px" />
                        <Typography className="thin" textAlign="center" style={{ letterSpacing: '3px', textTransform: 'uppercase', fontSize: '13px' }}>HELP</Typography>
                        <Spacebox padding="5px" />
                        <Typography variant="h2" style={{ fontSize: '32px', textAlign: 'center' }}>
                            Questions? We're here for you
                        </Typography>
                        <Typography style={{ fontSize: '16px', textAlign: 'center' }}>
                            Contact us to get more info about products and custom solutions
                        </Typography>
                        <Spacebox padding="20px" />
                        <div className="mid margin-auto">
                            <span>Full Name*</span>
                            <Spacebox padding="5px" />
                            <input
                                type="text"
                                className="fullname"
                                id="fullname"
                                value={fullname}
                                onChange={(e) => setFullname(e.target.value)}
                            />
                            <Spacebox padding="10px" />
                            <span>Email*</span>
                            <Spacebox padding="5px" />
                            <input
                                type="email"
                                className="email"
                                id="fullname"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Spacebox padding="10px" />
                            <span>Phone*</span>
                            <Spacebox padding="5px" />
                            <input
                                type="tel"
                                className="phone"
                                id="phone"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <Spacebox padding="10px" />
                            <span>Message*</span>
                            <Spacebox padding="5px" />
                            <textarea
                                type="tel"
                                className="phone"
                                id="phone"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <Spacebox padding="10px" />
                            <CustomButton style={{background: 'var(--primary)', color: 'white', padding: '20px 0', borderRadius: '10px'}} className="fullwidth" handleClick={() => {
                                // TODO: Send to some endpoint
                            }}>
                                Submit
                            </CustomButton>
                        </div>
                    </Container>
                </section>
                <Footer className="pre-grey white" />
            </div>
        </Layout>
    );
}

export default Home;