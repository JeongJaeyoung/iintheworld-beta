import "./AppLayout.css";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Body from './Body'
import Footer from './Footer'

export default function AppLayoutStep0({children}) {
    return(
        <>
            <div className="applayout-header">
                <Header1 subtitle={'현실 속 자아실현 지침서'} />
                <Header2 type={'step0'} />
            </div>
            <Body>
                {children}
            </Body>
            <Footer/>
        </>
    );
}