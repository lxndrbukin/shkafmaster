import React from 'react';
import '../Orders/Orders.scss';
import { connect } from 'react-redux';
import { fetchOrders } from '../../actions';
import Order from '../Orders/Order';

class OrdersPage extends React.Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  ordersList() {
    if (!this.props.orders[0]) {
      return 'Loading';
    }
    return this.props.orders.map((order, idx) => {
      return (
        <Order
          key={idx}
          name={order.name}
          phone={order.phone}
          communications={order.communications}
          item={order.item}
          comment={order.comment}
        />
      );
    });
  }

  render() {
    return <div className='orders-list'>{this.ordersList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.orders,
  };
};

export default connect(mapStateToProps, { fetchOrders })(OrdersPage);
