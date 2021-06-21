import React from 'react';
import './price-card.styles.css'

const PriceCard = ({ title, price, ...otherProps }) => {
    return (
        <>
            <div className="col-lg-4">
                <div className="card mb-5 mb-lg-0">
                    <div className="card-body">
                        <h5 className="card-title text-muted text-uppercase text-center">{title}</h5>
                        <h6 className="card-price text-center">${price}<span className="period">/month</span></h6>
                        <hr />
                        <ul className="fa-ul">
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>{otherProps.line1}</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>{otherProps.line2}</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>{otherProps.line3}</li>
                            <li><span className="fa-li"><i className="fas fa-check"></i></span>{otherProps.line4}</li>
                            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{otherProps.line5}</li>
                            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{otherProps.line6}</li>
                            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{otherProps.line7}</li>
                            <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{otherProps.line8}</li>
                        </ul>
                        <a href="javascript(0)" className="btn btn-block btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PriceCard;