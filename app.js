const Milk = () => (
    <li>Frozen Milk Nuggets</li>
)

const Cheese = () => (
    <li>Puft Cheezee Strings</li>
)

const OtherItems = (props) => {
    const onLIClick = (event) => {
        alert('You clicked on ' + event.target.innerText);
    }

    return (
        <div>
            <li onClick={onLIClick}>{props.todos[0]}</li>
            <li onClick={onLIClick}>{props.todos[1]}</li>
            <li onClick={onLIClick}>{props.todos[2]}</li>
        </div>
    )
}

const GroceryList = (props) => (
    < ul >
        <Milk />
        <Cheese />
        <OtherItems todos={['All Natural, Unpasteurized, Excessively Organic, Udder-Fresh Dairy', 'Calcium', 'Swiss Holes']} />
    </ul >
)

class GroceryListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        }
    }

    onLIClick() {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        const style = {
            fontWeight: this.state.clicked ? 'bold' : 'normal'
        }

        return (
            <li style={style} onClick={this.onLIClick.bind(this)}>{this.props.todo}</li>
        )
    }
}

const GroceryList2 = (props) => (
    <ul>
        {props.todos.map(item =>
            <GroceryListItem todo={item} key={item} />
        )}
    </ul>
)

// ReactDOM.render(<GroceryList />, document.getElementById('app'));
ReactDOM.render(<GroceryList2 todos={['Milk', 'Cheese', 'Yogurt', 'Whey', 'Curd', 'Ghee', 'Butter']} />, document.getElementById('app'));