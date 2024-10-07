import { title } from "process"

const Header = (props) => {
  return (
    <header>
        <div>
        <h1 className="text-white text-center text-2xl"></h1>
        </div>
    
    </header>

  )
}
Header.defaultProps = {
    title:'Task Tracker'
}

export default Header