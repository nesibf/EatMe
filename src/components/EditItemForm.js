import React from "react";
import PropTypes from "prop-types";

class EditItemForm extends React.Component {

    static propTypes = {
        item: PropTypes.shape({
            name: PropTypes.string,
            status: PropTypes.string,
            desc: PropTypes.string,
            image: PropTypes.string,
            price: PropTypes.number,
        }),
        index: PropTypes.string,
        updateItem: PropTypes.func,
    };

    handleChange = event => {
        // update that item
        // 1. take a copy of the current item
        const updatedItem = {
            ...this.props.item,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateItem(this.props.index, updatedItem);
    };

    render() {
        return (
        <div className="item-edit">
            <input
                name="name"
                type="text"
                onChange={this.handleChange}
                value={this.props.item.name}
            />
            <input
                name="price"
                type="text"
                onChange={this.handleChange}
                value={this.props.item.price}
            />
            <select
                name="status"
                type="text"
                onChange={this.handleChange}
                value={this.props.item.status}
            >
                <option value="available">New!</option>
                <option value="unavailable">Sold Out!</option>
            </select>
            <textarea
                name="desc"
                onChange={this.handleChange}
                value={this.props.item.desc}
            />
            <input
                name="image"
                type="text"
                onChange={this.handleChange}
                value={this.props.item.image}
            />
            <button onClick={() => this.props.deleteItem(this.props.index)}>
                Remove Magazine
            </button>
        </div>
    )}
};

export default EditItemForm;
