import "./AppLayout.css";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Body from './Body'
import Footer from './Footer'

export default function AppLayoutStep1({children}) {
    return(
        <>
            <div className="applayout-header">
                <Header1 subtitle={'STEP1. 돈으로부터의 독립'} />
                <Header2 type={'step1'} />
            </div>
            <Body>
                {children}
            </Body>
            <Footer/>
        </>
    );
}