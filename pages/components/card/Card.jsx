import React, { useEffect, useState } from 'react';
import { CardWrapper } from './style';

const Card = ({data}) => {
    const [JSONdata, setJSONData] = useState(data);

    useEffect(() => {
        if (JSON.stringify(data) !== JSON.stringify(JSONdata)) {
            setJSONData(data);
        }
    }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

    return(
        JSONdata.map((jsonData, index) => {
            return(
                <CardWrapper key={ `${jsonData.name}${index}`}>
                    <div className="imageContainer">
                        <img src={ jsonData.image } alt={ jsonData.name } />
                        <div className="nameContainer">
                            <p className="nameField">{ jsonData.name }</p>
                            <p className="idField">
                                <span>{`id: ${jsonData.id} - created 2 years ago`}</span>
                            </p>
                        </div>
                    </div>
                    <div className="detailsContainer">
                        <div className="detailsField">
                            <span className="detailsLeft">STATUS</span>
                            <span className="detailsRight">{ jsonData.status }</span>    
                        </div>
                        <div className="detailsField">
                            <span className="detailsLeft">SPECIES</span>
                            <span className="detailsRight">{ jsonData.species }</span>    
                        </div>
                        <div className="detailsField">
                            <span className="detailsLeft">GENDER</span>
                            <span className="detailsRight">{ jsonData.gender }</span>    
                        </div>
                        <div className="detailsField">
                            <span className="detailsLeft">ORIGIN</span>
                            <span className="detailsRight">{ jsonData.origin.name }</span>    
                        </div>
                        <div className="detailsField">
                            <span className="detailsLeft">LAST LOCATION</span>
                            <span className="detailsRight">{ jsonData.location.name }</span>    
                        </div> 
                    </div>
                </CardWrapper>
            )    
        })
    )
}

export default Card;