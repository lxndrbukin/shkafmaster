import React from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from '../../actions';
import Order from './Order';

class OrdersPage extends React.Component {
  ordersList() {
    this.props.fetchOrders();
  }

  render() {
    return (
      <div className="orders-list">
        
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