const menuItems = ["About", "Testimonials", "Pricing", "Study Apps", "FAQ"]
const Header = () => {
    return (
    <div className="Header">
        <img className="MainLogo" src="./mttdbreview.jpeg" />
       {menuItems.map(item => <div className="MenuItem">{item}</div>)}
</div>)}

export default Header;