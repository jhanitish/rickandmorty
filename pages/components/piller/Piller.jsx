import React from 'react';
import { PillerWrapper, SVGWrapper } from './style';

const Piller = ({data, pillersClick}) => {
    const crossClick = (event) => {
        pillersClick(event);
    };
    return(
        <PillerWrapper>
            <div className="pillerContainer"> { data }
                <SVGWrapper onClick = { (event) => crossClick(event) } viewBox="0 0 24 24" value = { data }>
                    <path onClick = { (event) => crossClick(event) } value = { data } d="M12 0c6.636 0 12 5.364 12 12s-5.364 12-12 12S0 18.636 0 12 5.364 0 12 0zm6
                        16.308L13.692 12 18 7.692 16.308 6 12 10.308 7.692 6 6 7.692 10.308 12 6 16.308 7.692 18 12 13.692 16.308 18 18 16.308z"
                    />
                </SVGWrapper>
            </div>
        </PillerWrapper>
    )
};

export default Piller;