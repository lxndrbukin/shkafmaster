import React from 'react';

const Order = ({ name, phone, item, communications, comment }) => {
  const communicate = () => {
    if (communications) {
      return Object.keys(communications).map((social, idx) => {
        if (communications[social]) {
          if (social === 'phonecall') {
            return <i key={idx} className="fas fa-phone"></i>
          }
          return <i key={idx} className={`fab fa-${social}`}></i>
        }
      })
    }
  }

  return (
    <div className="order">
      <div className="order_header">
        <div className="order_customer-name">
          {name}
        </div>
        <div className="order_customer-phone">
          {communicate()}
          {phone}
        </div>
      </div>
      <div className="order_body">
        <div className="order_item">
          {item}
        </div>
        <div className="order_comment">
          {comment}
        </div>
      </div>
    </div>
  )
}

export default Order;