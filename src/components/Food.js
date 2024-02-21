import React, { Component } from 'react'
import '../styles/food.css'

class Food extends Component {
    constructor() {
        super();
        this.state = {
            flag: true,
            classNames: 'fa fa-heart-o '
        }
    }
    

    changeColor = () => { 
        if (this.state.flag) {
            this.setState({classNames: 'fa fa-heart  font-color'}); 
            this.setState({flag: false})
        }else {
            this.setState({classNames: 'fa fa-heart-o '}); 
            this.setState({flag: true})
        }
        
    }

    render() {
        const {img, title, price, children} = this.props; 
        return (
            <div className='food-box'>
                <img src={img} alt="title" className='img200x200'/>
                <h2 className='h3'>{title}</h2>
                <span className='price'>{price}$</span>
                <p className='p'>{children}</p>
                <i className={`${this.state.classNames}`} onClick={this.changeColor}></i>
               
            </div>
        );
    }
}

export default Food