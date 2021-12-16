import { useState, useEffect } from 'react';
import { MdExpandLess } from 'react-icons/md';
import { IconButton } from '@mui/material';
import styled from '@emotion/styled';

const ScrollButton = styled(IconButton)(() => ({
    
        zIndex: 2,
        position: 'fixed',
        bottom: '18.5px',
        backgroundColor: '#DCDCDC',
        color: 'black',
        "&:hover": {
            transition: '0.3',
            color: '#397BA6',
            backgroundColor: '#DCDCDC',
        },
        right: '5%',
    
}))

const ScrollToTop = ({
    showBelow
}) => {

        
    
        const [show, setShow] = useState(showBelow ? false : true)

        const handleScroll = () => {
            if (window.pageYOffset > showBelow) {
                if (!show) setShow(true)
            } else {
                if (show) setShow(false)
            }
        }

        useEffect(() => {
            if (showBelow) {
                window.addEventListener(`scroll`, handleScroll)
                return () => window.removeEventListener(`scroll`, handleScroll)
            }
        })

        const handleClick = () => {
            window[`scrollTo`] ({top: 0, behavior: `smooth`})
        }

    return (
        <div>
            {show &&
                <ScrollButton onClick={handleClick} >
                    <MdExpandLess/>
                </ScrollButton>
            }
        </div>
    )
}
export default ScrollToTop