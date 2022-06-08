import React from 'react';

const Order = ({ name, phone, item, comment }) => {
  return (
    <div className="order">
      <div className="order_header">
        <div className="order_customer-name">
          {name}
        </div>
        <div className="order_customer-phone">
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