import { useSelector } from "react-redux";
import SvskhdFooter from "./footer";
import SvskhdNav from "./header";

const SvskhdLayout = (props) => {
    // Correctly access the colors from the theme part of the state
    const { theme } = useSelector((state) => ({ ...state }));

    return (
        <>
            <body style={{ backgroundColor: theme.colors.bg }}>
                <div className="p-2" />
                <SvskhdNav />
                <div className="container content-box" style={{ color: theme.colors.text }}>
                    {props.children}
                    {JSON.stringify(theme.colors)}
                </div>
                <SvskhdFooter />
                <div className="p-2" />
            </body>
        </>
    );
};

export default SvskhdLayout;
