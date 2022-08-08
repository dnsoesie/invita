import classes from "./Footer.module.css";

const Footer = () => {
  return (<footer className={classes.footer}>
    <p className={classes.copyright}>&copy; Divine Nsoesie {new Date().getFullYear()}</p>

</footer>)
};

export default Footer;