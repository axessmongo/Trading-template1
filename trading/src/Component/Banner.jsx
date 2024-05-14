import React from 'react'
import zero from '../Asset/image/zero.png'
import tick from '../Asset/image/tick.png'
import group from '../Asset/image/group.png'
import invest from '../Asset/image/investing.jpg'
import bank from '../Asset/image/icons8-bank-50.png'
import clock from '../Asset/image/icons8-clock-50.png'
import stocks from '../Asset/image/icons8-stocks-50.png'
import lock from '../Asset/image/icons8-lock-50.png'
import timer from '../Asset/image/icons8-timer-50.png'
import flash from '../Asset/image/icons8-flash-50.png'
import arrow from '../Asset/image/icons8-round-arrow-50.png'
import investment from '../Asset/image/investment.png'
import commission from '../Asset/image/commission.png'
import banner1 from '../Asset/image/banner1.jpg'
import banner2 from '../Asset/image/banner2.jpg'
import banner3 from '../Asset/image/banner-3.jpg'


 
export default function Banner() {
  return (
    <div className=''>
      <section className="nav-banner" style={{ backgroundColor: 'blue' }}>
        <nav
          className="navbar navbar-expand-lg  "
          id="home"
          style={{ backgroundColor: '#0F2167' }}
        >
          <div className="container-fluid">
            <a className="navbar-brand" href='' style={{ color: 'white' }}>
              Trading Logo
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-3 heading5 p-2 mb-lg-0 text-center">
                <li className="nav-item">
                  <a className="nav-link active px-3" href="#home" style={{ color: 'white' }}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active px-3" href="#Investment" style={{ color: 'white' }}>
                    Investment
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active px-3" href="# Trading" style={{ color: 'white' }}>
                    Trading
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active px-3" href="# FQA" style={{ color: 'white' }}>
                    FQA
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active px-3" href="#Contact" style={{ color: 'white' }}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <section id='home'>
        <div id="carouselExampleSlidesOnly" className="carousel slide overflow-hidden" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div>
                <img src={banner1} alt="" className='img-fluid' style={{ width: '100%', height: '80vh' }} />
              </div>
            </div>
            <div className="carousel-item">
              <div>
                <div>
                  <img src={banner2} alt="" className='img-fluid' style={{ width: '100%', height: '80vh' }} />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div>
                <div>
                  <img src={banner3} alt="" style={{ width: '100%', height: '80vh' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section id='Investment' className='container overflow-hidden mt-5'>
        <h2 className='text-center'  data-aos="fade-up">Future Investment</h2>
        <div className='row mt-4'>
          <div className='col-md-6 mt-5 'data-aos="fade-left">
            <h6 className='mt-3'>NEW FEATURE!</h6>
            <h3 className='mt-3' style={{ color: "#0F2167" }}>Alternative investments,</h3>
            <h4 className='mt-2'style={{ color: " #8b2573" }}>now for the rest of us.</h4>
            <p className='mt-3'> VJ-Trade is giving its members the potential to build and protect their wealth with alts. Trade funds that include commodities, private credit, pre-IPO unicorns, real estate, and more.</p>
            <button style={{ backgroundColor: '#0F2167', color: "#fff", borderRadius: "5px", padding: "10px 20px", border: "none" }}>Trade</button>
          </div>
          <div className='col-md-6'  data-aos="fade-right">
            <div className='mt-3'>
              <img src={invest} alt="" style={{ maxWidth: '100%', borderRadius: '8px' }} />
            </div>
          </div> 
        </div>
      </section>

      <section className=' rupees overflow-hidden '>
        
        <div className='container ' data-aos="fade-down"style={{ width: '100%' }}>
          
         <div className=' rupeediv ' style={{minHeight:'100vh'}}>
         <h1 className='text-center pt-5 mt-5'>The hands-on way to put your
              money to work.</h1>
            <h5 className='text-center '>Active Investing with  VJ-Trade lets you quickly get started investing in stocks and ETFs.</h5>
         <div className='row mt-5 ' >
           

            <div className='col-md-4 mt-5  '>
              <div className='card rupe'>
              <div className='justify-content-center d-flex'>
                <img src={zero} alt=""/>
              </div>
              <h3 className='text-center mt-3'>Pay zero commission</h3>
              <p className='text-center '>Buy and sell stocks with no commissions*. Plus, there are no account minimums.</p>
              </div>

             
            </div>
            <div className='col-md-4 mt-5 '>
              <div className='card rupe'>
              <div className='justify-content-center d-flex'>
                <img src={tick} alt="" />
              </div>
              <h3 className='text-center mt-3'>Learn by doing</h3>
              <p className='text-center'>Anyone can be a smarter investor with news updates and  VJ-Trade app.</p>
              </div>

             
            </div>
            <div className='col-md-4 mt-5'>
              <div className=' card rupe'>
              <div className='justify-content-center d-flex'>
                <img src={group} alt="" />
              </div>
              <h3 className='text-center mt-3'>Join a community</h3>
              <p className='text-center'>Connect with other VJ-Trade members at exclusive events and experiences.</p>
              </div>
            </div>

          </div>
         </div>

        </div> </section>

    
     
        <section className='container mt-5 overflow-hidden'>
        <div className='row'>

          <div className='col-md-6'data-aos="fade-left">
            <div className='mt-3'>
              <img src={commission} alt="" style={{ maxWidth: '100%', borderRadius: '8px' }} />
            </div>
          </div>
          <div className='col-md-6 mt-5' data-aos="fade-left">

            <h3 className='mt-3' style={{ color: "#14203c" }}>Be an investor—</h3>
            <h4 className='mt-2' style={{ color: " #8b2573" }}>without commission.</h4>
            <p className='mt-3'>Our thought is that you shouldn’t have to pay to invest and trade your own money. That’s why you’ll pay $0 in VJ-Trade commission on every trade, every time</p>
            <button  style={{ backgroundColor: '#0F2167', color: "#fff", borderRadius: "5px", padding: "10px 20px", border: "none" }}>Trade</button>
          </div>

        </div>
      </section>
      <section id=' Trading' className=' power mt-5 overflow-hidden' data-aos="flip-left">
        <div className='container'style={{ width: '100%', height: '80vh' }}>
          <div className=' row  text-center mt-4 '>
            <h1 className=' '>Knowledge is trading power.</h1>
            <p>Stay up—to—date with real—time investing news, curated content, and other relevant data
              <br />
              by creating a personal watchlist and following the stocks that matter most to you.</p>
          </div>
        </div>
      </section>

      <section className='container mt-5 overflow-hidden'>
        <h3 className='text-center mt-5'data-aos="fade-up" >Indian markets at
          your fingertips.</h3>
        <p className='text-center mt-3'data-aos="fade-up"style={{ color: " #8b2573" }}>Long-term or Short-term,high risk or low risk.Be the kind of investor you want to be.</p>
        <div className='row mt-5 justify-content-around'>
          <div className='col-md-3  ' data-aos="fade-right">
            <div className='card indian'>
            <div className='py-4'>
              <h4 className='text-center  mt-2'>Stocks & Intraday</h4>
              <div className='text-center'>
                <img src={stocks} alt="" />
              </div>
              </div>
            </div>
          </div>
          <div className='col-md-3 ' data-aos="fade-right">
            <div className='py-4 card indian mt-2'>
              <h4 className='text-center  mt-2'>Mutual Funds & SIPs</h4>
              <div className='text-center'>
                <img src={bank} alt="" />
              </div>
            </div>
          </div>
          <div className='col-md-3   ' data-aos="fade-right">
            <div className='py-4 card indian mt-2' >
              <h4 className='text-center  mt-2 '>Futures & Option </h4>
              <div className='text-center  '>
                <img src={clock} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className='container overflow-hidden mt-5'>
        <div className='row'>
          <div className='col-md-6 mt-5'data-aos="fade-left">
            
            <h3 className='mt-3' style={{ color: "#0F2167" }}>Increase your buying</h3>
            <h4 className='mt-2' style={{ color: " #8b2573" }}>power with margin investing.</h4>
            <p className='mt-3'>Margin accounts allow investors to use their current cash or securities as collateral for a loan. Borrow money from SoFi against your current investments at 10% to buy stocks and ETFs.</p>
            <p>Margin lending allows traders to borrow money from their brokerage to invest in securities via a line of credit. Margin loans are collateralized by the investor’s existing portfolio and must be paid back with interest at a later date.</p>
            <p>Margin borrowing allows you to participate in even more investment opportunities and potentially increase your return if the value of your investments goes up.</p>
            <p>If you see an investment opportunity, you can jump on it right away without having to make a transfer into your account.</p>
            <p>Our margin loans have convenient payback schedules and are designed to help you trade on your terms.</p>
          </div>
          <div className='col-md-6'>
            <div className='mt-3 newFeatures' data-aos="fade-right">
              <img src={investment} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className='container overflow-hidden pt-5  mt-5'>
        <div className='text-center'>
          <img src={lock} alt="" />
        </div>
        <h3 className='text-center'data-aos="fade-up" >Stability,guaranteed.</h3>
        <p className='text-center mt-3'data-aos="fade-up" style={{ color: " #8b2573" }}>Invest with confidence.</p>
        <div className='row mt-5'>
          <div className='col-md-4'data-aos="fade-up">
            <div>
              <img src={arrow} alt="" />
              <p class="productDescription_cardHeading__KHIWL bodyXLarge mt-4">Managing ~50 lakh orders a day</p>
              <p>Our system is built for scale via rigorous testing to make sure you get the best experience.</p>
            </div>
          </div>
          <div className='col-md-4'data-aos="fade-up">
            <div>
              <img src={timer} alt="" />
              <p class="productDescription_cardHeading__KHIWL bodyXLarge mt-4">Industry best,99.99%uptime.</p>
              <p>Proactive monitoring,altering and fast response times ensure that VJ-tarde is always accessible for you.</p>
            </div>
          </div>
          <div className='col-md-4'data-aos="fade-up">
            <div>
              <img src={flash} alt="" />
              <p class="productDescription_cardHeading__KHIWL bodyXLarge mt-4">Placing orders takes only 0.2s.</p>
              <p>Speed is everything.Our systems are built and tested for the fastest response time and order placement.</p>
            </div>
          </div>
        </div>
      </section>
      <section className='pt-5 overflow-hidden'data-aos="flip-left">
        <div className='hedge pt-5'>
          <div className='container mt-5'>
            <div className=' row hedgediv text-center'>
              <h1>Hedge losses,</h1>
              <h1 >celebrate wins.</h1>
              <br />
              <p className='mt-3'>Loss protection on VJ-Trade with Stoploss,GTT and Target orders.</p>
            </div>
          </div>
          <button className='btn mt-3'>Get Started</button>
        </div>

      </section>
      <section id=' FQA' className=' container  overflow-hidden accordion pt-5'>
        <h2 className='text-center mt-5'data-aos="fade-up">Get Started</h2>
        <p className='text-center mt-4'data-aos="fade-up" style={{ color: " #8b2573" }}>Question? We have you covered.</p>
        <div className="accordion accordion-flush mt-5" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 class="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What are Derivatives?
              </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">To understand Futures and Options, it is important to have an understanding of Derivatives. In the financial markets, a Derivative is a contract that derives its value from underlying assets. These assets can be stocks, bonds, gold, currencies, market indices, commodities, etc. When you buy a derivatives contract, you earn profits by estimating the future price of the asset(s). There are four types of derivative contracts:
                <ul>
                  <li>Options</li>
                  <li>Futures</li>
                  <li>Forwards</li>
                  <li>Swaps</li>
                </ul></div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 class="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                What are Futures?
              </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">Futures are Derivatives contracts in which both buyers and sellers have the obligation to buy/sell the underlying asset at a predetermined price respectively. A Futures Contract is an agreement between the buyer and the seller to buy or sell a specified quantity of the underlying asset at a future date at a price agreed upon between them. Hence, at the expiration date, the buyer must buy and the seller must sell the agreed quantity of the asset at the set price regardless of the current price of the asset. Further, these contracts are marked to market every day. In other words, the contract value is changed every day until the expiration date. They are traded on exchanges just like stocks.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                What are Options?
              </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body"><p>Options are Derivates contracts that offer the buyer the right (but not the obligation) to buy/sell the underlying asset at a predetermined price. The buyer can also choose to allow the Option to expire. The seller has an obligation to execute the contract. They are traded on exchanges just like stocks. An Option contract has four elements:</p><ul>
                <li>
                  <b>Strike price:</b> This is the price at which the seller and the buyer of the Option agree to enter the Option contract.
                </li>
                <li>
                  <b>Premium:</b> The buyer of an Option contract makes a payment to the seller to earn the <b>right</b> to an Option contract. This is called Premium.
                </li>
                <li>
                  <b>Expiration day:</b> An Option contract gives the buyer the right to buy/sell the underlying asset. The Expiration Day is the last day that the owner of the Option can exercise the right.
                </li>
                <li>
                  <b>Lot Size:</b> Every Options contract has a fixed number of units of the underlying asset. This is the Lot Size.
                </li>
              </ul>
                It is important to note that the buyer of an Option does not purchase the assets. Investors pay the premium amount to buy the Option and exercise their right if the market moves in their favor.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                What are the different types of Options?
              </button>
            </h2>
            <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body"><p>There are two types of Options contracts:</p><ol>
                <li>
                  <b>Call Option</b> – Gives the owner of the Option the right to buy the underlying asset at the <b>strike price</b> on or before the <b>expiration date</b> of the contract.

                  <b>Example: </b>
                  Let’s say that you buy a Call Option on ABC Limited for June having a strike price of Rs.1000 and a premium of Rs.50 for a lot size of 100 shares. This means that you have the right to buy 100 shares of ABC Limited at Rs.1000 anytime until the 30th of June. To buy this right, you have to pay a premium of Rs.5000 (Rs.50 x 100 shares).
                  On the expiration date, if the price of the share is Rs.1100, then the buyer of the Option can exercise his right to buy the shares at Rs.1000 and sell them immediately for a profit. The net earnings would be:
                  Net Profit = Selling Price – Buying Price – Premium
                  Net Profit = 110000 – 100000 – 5000 = Rs.5000
                  However, on the expiration date if the price of the shares falls to Rs.900, then the buyer of the Option can allow the contract to expire and book a loss of Rs.5000 (premium amount) as opposed to buying the shares at Rs.1000 and selling them at Rs.900 and booking a higher loss of Rs.10000.
                  Therefore, the Call Option allows the buyer to limit losses while securing unlimited profit potential. This is a good investment avenue for investors who believe that the stock price will rise in the near future.
                </li>
                <li>
                  <b>Put Option</b> – Gives the owner of the Option the right to sell the underlying asset at the <b>strike price</b> on or before the <b>expiration date</b> of the contract.

                  <b>Example: </b>
                  Let’s say that you buy a Put Option on ABC Limited for June having a strike price of Rs.1000 and a premium of Rs.50 for a lot size of 100 shares. This means thatyou have the right to sell 100 shares of ABC Limited at Rs.1000 anytime until the 30th of June. To buy this right, you have to pay a premium of Rs.5000 (Rs.50 x 100 shares).
                  On the expiration date, if the price of the share is Rs.900, then the buyer of the Option can exercise his right to buy the shares at Rs.900 and sell them immediately at Rs.1000 for a profit. The net earnings would be:
                  Net Profit = Selling Price – Buying Price – Premium
                  Net Profit = 100000 – 90000 – 5000 = Rs.5000
                  However, on the expiration date if the price of the shares climbs to Rs.1100, then the buyer of the Option can allow the contract to expire and book a loss of Rs.5000 (premium amount) as opposed to buying the shares at Rs.1100 and selling them at Rs.1000 and booking a higher loss of Rs.10000.
                  Therefore, the Put Option allows the buyer to limit losses while securing a wide range of potential profits. This is a good investment avenue for investors who believe that the stock price will fall in the near future.
                </li>
              </ol></div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                How is the premium of an Options Contract calculated?
              </button>
            </h2>
            <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body"><p>There are various factors that affect the calculation of the premium of an Options Contract:</p><ul>
                <li>
                  <b>Price of the underlying asset(s)</b> – The premium of an Options contract changes with the price of the underlying asset(s).
                  <ul>
                    <li>
                      <i>Call Option</i> – If the price of the underlying asset(s) increases the premium of a Call Option increases too and vice-versa.
                    </li>
                    <li>
                      <i>Put Option</i> – If the price of the underlying asset(s) increases the premium of a Put Option decreases and vice-versa.
                    </li>
                  </ul>
                </li>

                <li>
                  <b>Intrinsic Value</b> – Intrinsic Value is calculated as the difference between the strike price and the current market price of the option. This is calculated assuming that you exercise the option today
                  <ul>
                    <li>
                      <i>Call Option</i> – If the intrinsic value increases the premium of a Call Option decreases and vice-versa.
                    </li>
                    <li>
                      <i>Put Option</i> – If the intrinsic value increases the premium of a Call Option decreases and vice-versa.
                    </li>
                  </ul>
                </li>
                <li>
                  <b>Volatility of the underlying asset(s)</b> – The volatility in the price of the underlying asset(s) also impacts the premium of the Options contract. If the volatility is higher, the premium will be higher and vice-versa.
                </li>
                <li>
                  <b>Time to expire</b> – The time left for the contract to expire has a bearing on the premium too. If the expiration date is close, the premium will be lower since the buyer of the contract will have a shorter duration to get the price of the underlying asset(s) to move in a favorable direction.
                </li>
                <li>
                  <b>Prevailing interest rates</b> – The existing risk-free interest rates in the country also have a minimal impact on the premium of an Options contract. If the interest rates increase, the premium tends to increase too and vice-versa.
                </li>
                <li>
                  <b>Dividends</b> – If an Option is based on stocks and the company declares a dividend, then it can impact premium pricing. SEBI mandates Options prices to be adjusted for non-dividend days when the company announces a dividend of more than ten percent. Typically, a higher dividend leads to a drop in premium.
                </li>
              </ul></div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                How do I buy Options?
              </button>
            </h2>
            <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body"><p>You can buy/sell Options contracts through broking firms that are registered members of the BSE or NSE. These brokers provide online platforms and/or mobile applications allowing you to trade in Options at will. Before opening an account, ensure that the broker offers Options trading and supports all kinds of Options like equity, currency, commodity, etc.</p><ul>
                <li>Open an account with a stockbroker</li>
                <li>Login to the portal or mobile application</li>
                <li>Go through the Options contracts available</li>
                <li>Select the desired one</li>
                <li>Enter order details</li>
                <li>Place the order</li>
              </ul>
                Trading in Options is similar to trading in shares.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                How do I use Call and/or Put Option?
              </button>
            </h2>
            <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body"><p>When you are looking at an Option, assess the underlying asset(s) and try to estimate the direction its price might take in the coming month.</p> <br />
                <b>If you think the price will increase...</b>
                <p>In these cases, you can consider BUYING a Call Option or SELLING a Put Option as it will put you in a position to earn profits.</p>
                <br />
                <b>If you think the price will decrease...</b>
                <p>In these cases, you can consider SELLING a Call Option or BUYING a Put Option as it will put you in a position to earn profits.</p></div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight" aria-expanded="false" aria-controls="flush-collapseEight">
                What are the benefits of trading in Options?
              </button>
            </h2>
            <div id="flush-collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body"><p>Trading in Options offers a range of benefits including:</p><ul>
                <li>
                  <b>Low investment</b> – When you buy an Option, you don’t have to pay the entire price of the underlying asset. Instead, a marginal amount needs to be paid called the premium. This allows you to gain exposure to the asset/instrument with a low investment.
                </li>
                <li>
                  <b>Higher profit percentage</b> – Think of a share of a company having a market price of Rs.100 per share. If you were to buy 100 shares, then you will need to make an investment of Rs.10000. Within a month, if the share price increases to Rs.120 and you sell all 100 shares, then you book a profit of Rs.2000. With Options, you can book the same profit by investing a much lower amount.
                </li>
                <li>
                  <b>Works in all market conditions</b> – The best benefit of trading in Options is that you can benefit in all market conditions. All you need to do is create strategies accordingly.
                </li>
              </ul></div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine" aria-expanded="false" aria-controls="flush-collapseNine">
                Which are the Options trading exchanges in India?
              </button>
            </h2>
            <div id="flush-collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body"><p>In India, the National Stock Exchange (NSE) and the Bombay Stock Exchange (BSE) are Options trading exchanges.</p></div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen" aria-expanded="false" aria-controls="flush-collapseTen">
                Which are the Long Dated Options?
              </button>
            </h2>
            <div id="flush-collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
              <div className="accordion-body"><p>Options contracts with a maturity of up to three years are called Long Dated Options. While the features of these Options are the same as the monthly Options, they offer certain benefits like:</p><ul>
                <li>Long-term exposure to the underlying asset(s)</li>
                <li>Allows investors to hedge their equity position</li>
                <li>Reduces risk since investors get a larger window to book profits.</li>
              </ul>
                It is important to remember that these Options usually have a higher premium.
              </div>
            </div>
          </div>
        </div>
      </section> 
      <section id='contact'>
      <footer  className='bg-black overflow-hidden' data-aos='fade-up' data-aos-duration="800">
            <div className='row py-3 my-3 text-light'>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <div className='text-center px-4'>
                        <h2 style={{color:'sandybrown'}}>VJ-Trade</h2>
                        <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur fugit, 
                            iure quos quas, accusantium quia quasi eveniet</p>
                    </div>
                </div>
                <div className='col-md-2'>
                    <div>
                        <h4 style={{color:'sandybrown'}}>Quick Links</h4>
                        <p>About</p>
                        <p>Contact Us</p>
                        <p>FAQs</p>
                        
                    </div>
                </div>
                <div className='col-md-2'>
                    <div>
                        <h4 style={{color:'sandybrown'}}>New Products</h4>
                        <p>Stocks</p>
                <p>Futures & Options</p>
                <p>IPO</p>
                <p>Mutual Funds</p>
                <p>Credit</p>
                <p>Bill Payments</p>
                    </div>
                </div>
                <div className='col-md-4 d-flex justify-content-center align-items-center'>
                    <div className='text-center'>
                    <h4 style={{color:'sandybrown'}}>Contact Us</h4>
                    <p>No.4, Gandhi salai, Taramani,</p>
                    <p>Chennai-600113</p>
                    <p>TamilNadu, India</p>
                    </div>
                </div>
            </div>
            <h5 className='text-center pb-2'style={{color:'sandybrown'}}>Right VJ-Trade © 2021. All Rights Reserved</h5>
            </footer>
      </section>
    </div>

  )
}
