
function Header(){

    return(
        <div className="bg-[rgb(244,164,96)] h-[15vh]  ">
            <header className="text-center">
                <h1> JHMVA </h1>
                <nav>
                    <ul className="flex gap-3 ">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </nav>
                
            </header>
        </div>
    );
}

export default Header