import classes from "./Layout.module.css";
import Header from "../UI/Header/Header";
import Footer from "../UI/Footer/Footer";

const Layout = (props) => {
return (
    <div>
        <Header />
        <main className={classes.layout}>{props.children}</main>
        <Footer />
    </div>
)
}

export default Layout;