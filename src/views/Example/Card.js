
function Card({children}){
    const cardStyle = {
        width: '400px',
        height: '300px',
        border : '1px solid',
        borderRadius : '2px',
        padding : '4px',
        margin : '4px',
        backgroundColor : 'rgba(0,0,0,0.9)',
    }
    return(
        <div style={cardStyle}>
        {children}
        </div>
    );
}

export default Card;