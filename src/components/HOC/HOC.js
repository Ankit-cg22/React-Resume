import React from 'react'
import BulletPoints from '../BulletPoints/BulletPoints';
import '../../css/index.css'

const HOC = (SubTitleComponent , SideInfoComponent) => {
    return class extends React.Component{
       
        render(){
            const { title, subTitleInfo, sideInfo, bulletPoints} = this.props;

            return (
                <div className='hoc-main-container'>
                <div className='hoc-top-container'>
                    <div className='experience-title-subTitle'>
                        <div className='hoc-title'>{title}</div>
                        <div className='hoc-subtitle'>
                            <SubTitleComponent data={subTitleInfo}/>
                        </div>
                    </div>
                    <div className='hoc-wrapped-component'>
                        <SideInfoComponent data={sideInfo}/>
                    </div>
                </div>
                <BulletPoints bulletPoints={bulletPoints}/>
                </div>
            )
        }
    }
}

export default HOC ;