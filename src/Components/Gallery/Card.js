import React from 'react';

function Card(props) {
    return (
        <div style={{
            ...styles.card,
            ...styles[props.size]
        }}>
            <img src={props.image} alt="Vase" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
        </div>
    )
}

const styles = {
    card: {
        margin: '15px 10px',
        padding: 0,
        borderRadius: '16px',
        overflow: 'hidden', // Ensure the image stays within the bounds of the card
        backgroundColor: 'red'
    },
    small: {
        gridRowEnd: 'span 26'
    },
    medium: {
        gridRowEnd: 'span 33'
    },
    large: {
        gridRowEnd: 'span 45'
    }
}

export default Card;
