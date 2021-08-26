import PropTypes from "prop-types";

export default function Title(props) {
    console.log("Title component", props);
    return <div>
        <h1>Title is {props.title} and name is {props.name} Array {props.propArray}</h1>
    </div>;
}

/*
export default class Title extends React.Component {
    render() { 
        return <h1>This is Title Functional Component</h1> 
    }
}
*/

Title.propTypes = {
    title: PropTypes.string,
    name: PropTypes.string
}

Title.defaultProps = {
    name: "Harsh",
    propArray: [2,3,4,5]
}