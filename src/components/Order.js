import React from 'react';
import PropTypes from "prop-types";
import { formatPrice } from "../helpers"
import {TransitionGroup, CSSTransition} from "react-transition-group";

class Order extends React.Component {

    static propTypes = {
        items: PropTypes.object,
        order: PropTypes.object,
        removeFromOrder: PropTypes.func
    };

    renderOrder = key => {
        const item = this.props.items[key];
        const count = this.props.order[key];
        const isAvailable = item && item.status === "available";
        const transitionOptions = {
            classNames: "count",
            key,
            timeout: {enter: 500, exit: 500}
        };

        // Make sure the item is loaded before we continue!
        if (!item) return null;

        if (!isAvailable) {
            return (
                <li key={key}>
                    Sorry {item ? item.name : "item"} is no longer available
                </li>
            );
        }

        return (
            <CSSTransition {...transitionOptions}>
                <li key={key}>
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition {...transitionOptions}>
                                <span>{count}</span>
                            </CSSTransition>
                        </TransitionGroup>
                        x {item.name}
                        <span> {formatPrice(count * item.price)}</span>
                    </span>
                    <button onClick={() => this.props.removeFromOrder(key)}>
                        &times;
                    </button>
                </li>
            </CSSTransition>
        );
    };

    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
           const item = this.props.items[key];
           const count = this.props.order[key];
           const isAvailable = item && item.status === "available";
           if (isAvailable) {
               return prevTotal + count * item.price;
           }
           return prevTotal;
        }, 0);

        return (
            <div className='order-wrap'>
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <div className="total">
                    Total:
                    <strong> {formatPrice(total)}</strong>
                </div>
            </div>
        );
    };
}

export default Order;
