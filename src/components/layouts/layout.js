import SvskhdFooter from "./footer"
import SvskhdNav from "./header"

const SvskhdLayout = (props) => {
    return (
        <>
            <div>
                <SvskhdNav />
                <div className="container content-box">
                    {props.children}
                </div>
                <SvskhdFooter />
            </div>
        </>
    )
}
export default SvskhdLayout