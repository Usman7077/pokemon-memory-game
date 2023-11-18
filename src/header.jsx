const Header = ({scoreLength, highScoreq}) => {
    return (
        <>
            <div className="header">
                <h1>Pokemon Memory Game</h1>
                <div>
                    <h2>Score: {scoreLength}</h2>
                    <h2>High Score: {highScoreq}</h2>
                </div>
            </div>
        </>
    )
}
export default Header;