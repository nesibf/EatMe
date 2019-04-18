import React from 'react'
import PropTypes from "prop-types";
import firebase from "firebase";
import AddFishForm from './AddItemForm'
import EditFishForm from './EditItemForm'
import Login from './Login'
import base, {firebaseApp} from "../base";

class Inventory extends React.Component {

    state = {
        uid: null,
        owner: null
    };

    static propTypes = {
        fishes: PropTypes.object,
        updateFish: PropTypes.func,
        deleteFish: PropTypes.func,
        loadSampleFishes: PropTypes.func
    };


    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if(user) {
                this.authHandler({ user });
            }
        })
    };

    authHandler = async authData => {
        // 1. Look upt the current store in the firebase database
        const store = await base.fetch(this.props.storeId, { context: this });
        // 2. Claim it if there is no owner
        if(!store.owner){
            await base.post(`${this.props.storeId}/owner`, {
                data: authData.user.uid
            });
        }
        // 3. Set the state of the inventory component to reflect to current user
        this.setState({
            uid: authData.user.uid,
            owner: this.state.owner || authData.user.uid
        });
    };

    authenticate = provider => {
        const authProvider = new firebase.auth[`${provider}AuthProvider`]();
        firebaseApp.auth().signInWithPopup(authProvider).then(this.authHandler);
    };

    logout = async () => {
        console.log("Logging Out!");
        await firebase.auth().signOut();
        this.setState({ uid: null });
    };

    render() {
        const logout = <button onClick={this.logout}>Log Out!</button>;

        // 1. checked if they are logged in
        if (!this.state.uid) {
            return <Login authenticate={this.authenticate}/>;
        }
        // 2. check if they are not the owner of the store
        if (this.state.uid !== this.state.owner) {
            return (
                <div>
                    <p>Sorry you are not the owner!</p>
                    {logout}
                </div>
            )
        }
        // 3. They must be the owner, just render the inventory
        return (
            <div className='inventory'>
                <h2>Inventory</h2>
                {logout}
                {Object.keys(this.props.items).map(key => (
                    <EditFishForm
                        key={key}
                        index={key}
                        fish={this.props.items[key]}
                        updateFish={this.props.updateItem}
                        deleteFish={this.props.deleteItem}
                    />
                ))}
                <AddFishForm addFish={this.props.addItem} />
                <button onClick={this.props.loadSampleItems}> Load Magazines</button>
            </div>
        );
    };
}

export default Inventory;
