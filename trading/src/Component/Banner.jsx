import React from 'react'
import zero from '../Asset/image/zero.png'
import tick from '../Asset/image/tick.png'
import group from '../Asset/image/group.png'

export default function Banner() {
    return (
      <div className=' rupees'>
        <section  className='container'>
        
            <div className='row mt-4  rupeediv pt-5 '>
                <h1 className='text-center'>The hands-on way to put your
                    money to work.</h1>
                <h5 className='text-center mt-2'>Active Investing with  VJ-Trade lets you quickly get started investing in stocks and ETFs.</h5>

                <div className='col-md-4 mt-5 card rupe'>
                    <div className='justify-content-center d-flex'>
                        <img src={zero} alt="" />
                    </div>

                    <h3 className='text-center mt-3'>Pay zero commission.</h3>
                    <p className='text-center mb-5'>Buy and sell stocks with no commissions*. Plus, there are no account minimums.</p>
                </div>
                <div className='col-md-4 mt-5 card rupe'>
                    <div className='justify-content-center d-flex'>
                        <img src={tick} alt="" />
                    </div>

                    <h3 className='text-center mt-3'>Learn by doing.</h3>
                    <p className='text-center'>Anyone can be a smarter investor with news updates and more—all in the VJ-Trade app.</p>
                </div>
                <div className='col-md-4 mt-5 card rupe'>
                    <div className='justify-content-center d-flex'>
                        <img src={group} alt="" />
                    </div>

                    <h3 className='text-center mt-3'>Join a community.</h3>
                    <p className='text-center'>Connect with other VJ-Trade members at exclusive events and experiences.</p>

                </div>

            </div>
        
        </section>
      </div>
    )
}
