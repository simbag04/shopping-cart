const Totals = (props) => {
    return (
        <div className="totals">
            <div>Total Items: {props.totalItems}</div>
            <div>Total Price: ${props.totalPrice}</div>
        </div>
    )
}

export default Totals