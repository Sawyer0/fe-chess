import '../../styles/Queen.css'

const Queen = ({color}) => {
    return (
        <div className={`queen ${color}`}>
            {color === 'white' ? '♕' : '♛'}
        </div>
    );
};

export default Queen