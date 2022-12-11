import React, { useState } from 'react'
import plus from '../../assets/images/plus.png'
import { t } from "i18next";

const Description = (props) => {
    const [visible, setVisible] = useState(false)
    let { member } = props
    return (
        <div className="team-member">
            <div className="img-wrap">
                <img src={member.image} className='member-image' />
                <div><img src={plus} className='plus-img' onClick={()=>setVisible(!visible)}/></div>

            </div>
            <div>
                <h4 className='member-title'>{member.name}</h4>
                <p className='member-title'>{member.title}</p>
            </div>
            <p className='member-description container' style={{display:visible?'block':'none'}}>
                {member.desc}
            </p>
        </div>
    )
}

export default Description