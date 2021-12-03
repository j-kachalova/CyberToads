import './Header.css';

const HeaderLink = ({ children }) => {

    // const [isSelected, setSelected]
    return (
        <div className='Header_link Header_link_selected'>
            {children}
        </div>
    )
}

export { HeaderLink };