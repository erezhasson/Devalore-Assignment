import React from 'react'
import PetDetail from './PetDetail';
import './Pet.css'

const Pet = (props) => {
    return (
        <div className='pet-wrapper'>
            <img className="pet-image" src={props.petImg} alt="pet"/>
            <div className='pet-details-wrapper'>
                <ul className='pet-details'>
                    <div className='pet-name'>{props.petName}</div>
                    <PetDetail detail="Age" text={props.petAge}/>
                    <PetDetail detail="Type" text={props.petType}/>
                    <PetDetail detail="Color" text={props.petColor}/>
                </ul>
            </div>
        </div>
    )
}

export default Pet;