import React, { useState } from 'react'
import './CountrySlides.css'
// import { BsChevronLeft, FaArrowAltCircleLeft } from "react-icons/fa"

import Language from './SVG/LanguageIconSvg'
import CapitalIconSvg from './SVG/CapitalIconSvg'
import CurrencyIconSvg from './SVG/CurrencyIconSvg'
import useImageColor from 'use-image-color'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const CountrySlides = ({ slides, begining }) => {

    const [current, setCurrent] = useState(begining)
    const length = slides.length
    const prevSlide = () => {
        setCurrent(current===0 ? length-1 : current-1)
    }
    const nextSlide = () => {
        setCurrent(current===length-1 ? 0 : current +1 )
    }
    //Get dominant color of the flag
    const { colors } = useImageColor(slides[current].flags.svg, { cors: true, colors: 2 })
    var second = "#090909"
    if (colors) {
        second = `${colors[1]}`
    }
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
    return (
        <div className="countrySlides"
            style={{ background: `radial-gradient( ${second}, #090909)` }}>
            <div className="slider" >
                
                {
                    slides.map((slide, index) => {
                        //destructure slide
                        const { languages, currencies } = slide
                  
                        return (
                            //appearing animation
                            <div className={index === current ? "slide  active " : "slide"} key={index}>
                                {/* display current counrty */}
                                {current === index &&
                                
                                    (<div className="countryDetails">
                                    
                                        <div className="leftContainer">
                                                <img className="flag"  src={slide.flags.svg} alt={index} />
                                                <h1>{slide.name.common}</h1>
                                        </div>
                                        <div className="rightContainer">
                                            <div className="rightDetails">
                                                <div className="rightDetail">
                                                <CurrencyIconSvg />
                                                    <div>
                                                    {currencies !== undefined||null ?
                                                        Object.values(currencies).map(($ , index) =>  (
                                                           <h2 key={index}>{$.name}&nbsp; </h2>)
                                                        )
                                                        :<h2> - </h2>
                                                    }</div>
                                                </div>
                                                <div className="rightDetail">
                                                    <CapitalIconSvg />
                                                    <div>
                                                        { slide.capital !== undefined || null ?
                                                            Object.values(slide.capital).map((cap , index) => (
                                                                        <h2 key={index}>{cap}&nbsp; </h2> 
                                                            ))
                                                            : <h2> - </h2>
                                                        }
                                                    </div>
                                                </div>
                                                <div className="rightDetail">
                                                <Language />
                                                    <div>
                                                        {languages !== undefined || null ?
                                                        Object.values(languages).map((lang, index) => (
                                                                index<=3 &&
                                                                        <h2 key={index}>{lang}&nbsp;</h2> 
                                                            ))
                                                            : <h2> - </h2>
                                                        }
                                                    </div>
                                                </div>    
                                            </div>
                                        </div>
                                    
                                    </div>
                                    )}
                            </div>
                        )
                    })
                }
           
                < ArrowBackIosIcon fontSize="large" className="arrowIcon left-arrow" onClick={prevSlide} />
                <ArrowForwardIosIcon fontSize="large"  className="arrowIcon right-arrow" onClick={nextSlide} />
            </div>
        </div>
    )
}

export default CountrySlides
