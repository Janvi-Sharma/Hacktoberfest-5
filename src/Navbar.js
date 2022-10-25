const  Navbar= () => {
    return (
        <nav className="navbar">
            <h1  style={{fontSize : '35px'}}>My Safe Space</h1> {/*this is first PR*/}
            <div className="links">
                <a href="/">Home</a>
                <a href="/write" >New Entry</a>
            </div>
        </nav>
      );
}
 
export default Navbar;