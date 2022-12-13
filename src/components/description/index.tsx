import React, { useState } from 'react'
import plus from '../../assets/images/plus.png'
import Tooltip from '@mui/material/Tooltip';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './description.css';

const Description = (props) => {
    console.log('data', props.data)
    const theme = createTheme({
        components: {
            // Name of the component
            MuiTooltip: {
                defaultProps: {
                    disableHoverListener: true
                },
                styleOverrides: {
                    tooltip: {
                        fontSize: "1em",
                        color: "#2f439a",
                        backgroundColor: "white",
                        textAlign: 'justify',
                        fontFamily: "RAG-Sans1.0-Regular",
                        direction: "rtl",
                        boxShadow: " 0px 0px 30px -15px rgb(0 0 0 / 30%)",
                        borderRadius: "20px",
                    },
                    arrow: {
                        color: "white",
                        boxShadow: " 0px 0px 30px -15px rgb(0 0 0 / 30%)",
                        borderRadius: "20px",
                    }
                }
            },

        },
    })

    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div  className='plus-img' >
            <ThemeProvider theme={theme} >
                <Tooltip title={props.data} open={open} onBlur={handleClose} onClick={() => setOpen(!open)} arrow>
                    <Button  > <img src={plus} /></Button>
                </Tooltip>
            </ThemeProvider>
        </div>
    )
}

export default Description