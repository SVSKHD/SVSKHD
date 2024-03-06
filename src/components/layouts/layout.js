import { useSelector } from "react-redux";
import SvskhdFooter from "./footer";
import SvskhdNav from "./header";

const SvskhdLayout = (props) => {
    // Correctly access the colors from the theme part of the state
    const { theme } = useSelector((state) => ({ ...state }));

    return (
        <>
            <div >
            <body style={{ backgroundColor: theme.colors.bg }} >
                <SvskhdNav />
                
                <div className="container content-box">
                    {props.children}
                    {JSON.stringify(theme.colors)}
                </div>
                <SvskhdFooter />
                </body>
            </div>
        </>
    );
};

export default SvskhdLayout;
