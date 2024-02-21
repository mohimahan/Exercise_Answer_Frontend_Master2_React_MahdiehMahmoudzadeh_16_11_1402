import React, { Component } from 'react'
import Food from "./Food"
import '../styles/foods.css'
import f1 from '../images/f1.jpg'
import f2 from '../images/f2.jpg'
import f3 from '../images/f3.jpg'
import f4 from '../images/f4.jpg'



class Foods extends Component {
    constructor() {
        super();
        this.state = {
            flag: true,
            classNameIcon: 'fa fa-chevron-up',
            classNameHeader: 'header-1',
            classNameContainer: 'foods-container-1',
 
        }
    }

    changeIcon = () => {
        if (this.state.flag) {
            this.setState({classNameIcon: 'fa fa-chevron-up rotate-left'}); 
            this.setState({classNameHeader: 'header-2'}); 
            this.setState({classNameContainer: 'foods-container-2'}); 
            this.setState({flag: false})
        }else {
            this.setState({classNameIcon: 'fa fa-chevron-up rotate-right'}); 
            this.setState({classNameHeader: 'header-1'}); 
            this.setState({classNameContainer: 'foods-container-1'}); 
            this.setState({flag: true})
        }
    } 

    render() {
        return (
            <>
                <div className={`${this.state.classNameHeader}`} onClick={this.changeIcon}>
                    <span className='header-span'>Digital products</span>
                    <i className={`${this.state.classNameIcon}`} ></i>
                </div>
                <div className={`${this.state.classNameContainer}`} >
                    <Food img={f1} title='Product_1' price='230' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus autem totam ut expedita! Incidunt.</Food>
                    <Food img={f2} title='Product_2' price='410' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis.</Food>
                    <Food img={f3} title='Product_3' price='32' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus </Food>
                    <Food img={f4} title='Product_4' price='75' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis accusamus Lorem ipsum dolor sit amet consectetur.</Food>
                    
                </div>
            </>
        );
    }
}

export default Foods
