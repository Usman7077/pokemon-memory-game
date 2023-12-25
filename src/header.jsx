const Header = ({scoreLength, highScore}) => {
    return (
        <>
            <div className="header">
                <h1><i>Pokemon Memory Game</i></h1>
                <div>
                    <h2>Score: {scoreLength}</h2>
                    <h2>High Score: {highScore}</h2>
                </div>
            </div>
        </>
    )
}
export default Header;