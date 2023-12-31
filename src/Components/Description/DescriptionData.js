import './DescriptionStyles.css'
import { Component } from 'react'

class DescriptionData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className='des-container'>
                <div className='des-text'>
                    <h2>{this.props.Title}</h2>
                    <p>
                    {this.props.text}
                    </p>
                </div>
                <div className='image'>
                    <img src={this.props.img} alt="DescImage" />
                    <img src={this.props.img2} alt="DescImage" />
                </div>
            </div>
        </div>
        )
    }
}
export default DescriptionData;