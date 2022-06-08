import React from 'react';
import './Orders.scss';
import { connect } from 'react-redux';
import { fetchOrders } from '../../actions';
import Order from './Order';

class OrdersPage extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  ordersList() {
    if (!this.props.orders[0]) {
      return 'Loading';
    }
    return this.props.orders.map(order => {
      return (
        <Order 
          name={ order.name } 
          phone={ order.phone } 
          item={ order.item } 
          comment={ order.comment } 
        />
      )
    })
  }

  render() {
    return (
      <div className="orders-list">
        {this.ordersList()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders
  }
}

export default connect(mapStateToProps, { fetchOrders })(OrdersPage);