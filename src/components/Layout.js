import Header from "./Header";
import Spacebox from "./styles/Spacebox";
import '../css/input.css'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <Spacebox padding="10px" />
            {children}
        </div>
    );
}

export default Layout;