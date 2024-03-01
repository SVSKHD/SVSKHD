const { default: SvskhdNav } = require("./header")

const SvskhdLayout = (props) =>{
return(
    <>
    
    <div className="bg-animation">
    <SvskhdNav/>
    <div className="container">
    {props.children}
    </div>
    </div>
    </>
)
}
export default SvskhdLayout