const Card = ({ el, shuffleArray }) => {
    // console.log(el.id);
    return (
        <div
            className='card'
            id={el.id}
            onClick={(e) => shuffleArray(e)}
        >
            <img
                id={el.id}
                className='cardImg'
                src={el.sprites.other.dream_world.front_default}
            />
            <h3 id={el.id} >{el.name}</h3>
        </div>
    )
}

export default Card;
