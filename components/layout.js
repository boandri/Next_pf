import Header from './header'
import Footer from './footer'

export default function Layout({ children }){
    return(
        <>
            <h1>Layout</h1>
            <Header></Header>
            <div>{children}</div>
            <Footer></Footer>
        </>
    )

}