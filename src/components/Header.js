//import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router'

// use rafce extension to create Boiler plates

const Header = ({title, onAdd , showAdd}) => {
     const location = useLocation()

    //const onClick = () => {
      //  console.log('Click')
    //}

    return (
        <header className = "header" >
            <h1> {title} </h1>
            {location.pathname === "/" &&
             <Button color ={showAdd ? 'Red':'green'} text ={showAdd ? 'Close':'Add'}
              onClick = {onAdd}/>}
        </header>
    )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

//Header.propTypes = {
//   title : PropTypes.string.isRequired,
//}

//CSS in JS
//const headingStyle = {
//    color : 'red' , backgroundColor : 'black'
//}

export default Header
