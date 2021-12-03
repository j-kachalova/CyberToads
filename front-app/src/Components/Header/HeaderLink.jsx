import './Header.css';

const HeaderLink = ({ elemRef, onClick, children }) => {

    // const [isSelected, setSelected]
    return (
        <div className='Header_link' ref = {elemRef} onClick = {onClick}>
            {children}
        </div>
    )
}

export { HeaderLink };