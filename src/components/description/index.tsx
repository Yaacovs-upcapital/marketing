import React, { useState } from 'react'
import plus from '../../assets/images/plus.png'
import Tooltip from '@mui/material/Tooltip';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './description.css';
import useWindowSize from '../windowSize';

const Description = (props) => {
    const theme = createTheme({
        components: {
            // Name of the component
            MuiTooltip: {
                defaultProps: {
                    disableHoverListener: true,
                    PopperProps: {
                        // placement:"auto-start"
                    }
                },
                styleOverrides: {
                    tooltipArrow: {
                        fontSize: "1em",
                        color: "#2f439a",
                        backgroundColor: "white",
                        textAlign: 'justify',
                        fontFamily: "RAG-Sans1.0-Regular",
                        // direction: "rtl",
                        // boxShadow: " 0px 0px 50px -15px rgb(0 0 0 / 30%)",
                        filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, .5))",

                        borderRadius: "20px",
                        padding: 20,
                        width: useWindowSize() > 500 ? "35vw" : "",
                        maxWidth: "90vw",
                        margin: "auto",
                        '&::after': {
                            "content": '""',
                            filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, .5))"

                        }
                    },

                    arrow: {
                        color: "white",
                        boxShadow: " 0px 0px 50px -15px rgb(0 0 0 / 30%)",
                        borderRadius: "20px",
                    },


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
        <div className='plus-img' >
            <ThemeProvider theme={theme} >
                <Tooltip
                    title={props.data}
                    open={open}
                    onBlur={() => setOpen(false)}
                    arrow
                >
                    <button style={{ background: "transparent", border: "none" }}> <img onClick={() => setOpen(!open)} src={plus} /></button>
                </Tooltip>
            </ThemeProvider>
        </div>
    )
}

export default Description