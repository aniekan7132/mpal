import Flexbox from "./Flexbox";
import Spacebox from "./styles/Spacebox";

const HorizontalScroll = ({children}) => {
    return (
        <div className="horizontal-scroll">
            <div className="controls">

            </div>
            <Spacebox padding="10px" />
            <Flexbox alignItems="center" className="scroll hide-scrollbar">
                {children}
            </Flexbox>
        </div>
    );
}
 
export default HorizontalScroll;