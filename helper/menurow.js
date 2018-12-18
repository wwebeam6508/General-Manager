import React, {Component} from 'react';

import { Col , Row , Button , Icon} from 'native-base';

export default class MenuRow extends Component{
    constructor(props){
        super(props)
        this.state = { col: this.props.col,
                       item: this.props.item,
                       colstyle: this.props.colstyle,
                       rowstyle: this.props.rowstyle };
    }
    Menu (col,item){
        let menu = []
        
        for (let i = 0; i < Math.ceil(item.length/col); i++) {
            let column = []
            for (let j = (i*col); j - (i*col) < col; j++) {
                if(j<item.length){
                    column.push(<Col style={this.state.colstyle}>
                                    <Button>
                                        <Icon name={item[j].icon}></Icon>
                                    </Button>
                                </Col>)
                }else{
                    column.push(
                        <Col style={this.state.colstyle}></Col>
                    )
                }
            }
            
            menu.push(column)
        }
        
        let result = menu.map((value)=>{
            return(<Row style={this.state.rowstyle}>
                    {value}
                   </Row>)
        })
        
        return result
    }
    render(){
        return (
            this.Menu(this.state.col,this.state.item).map((value)=>{
                return value
            })
        );
    }
}