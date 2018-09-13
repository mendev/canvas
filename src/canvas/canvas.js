import React, { Component } from 'react';
import './canvas.css';


class Canvas extends Component {

    componentDidMount() {
        const canvas  = this.refs.canvas
        var text = this.props.text
        const ctx = canvas.getContext("2d")
        ctx.beginPath()
        ctx.arc(320,240,80,0,2*Math.PI)
        ctx.stroke()
        ctx.moveTo(320,240)
        ctx.lineTo(320,320)
        ctx.moveTo(320,240)
        ctx.lineTo(400,240)
        ctx.stroke()
        this.props.elements.forEach(draw)
        function draw(item){
            ctx.beginPath()
            switch(item.type) {
                case "circle":
                    ctx.arc(item['x-center'],item['y-center'],item['radius'],0,2*Math.PI)
                    break
                case "line":
                    ctx.moveTo(item['x-start'],item['y-start'])
                    ctx.lineTo(item['x-end'],item['y-end'])
                    break
                default:
                    console.log ("Error in element type")
            }
            ctx.stroke()
        }
        ctx.fillText(text, 280, 130)
    }

    render() {
        return(
            <div>
                <canvas ref="canvas" width={this.props.width} height={this.props.height}/>
            </div>
        )
    }
}

export default Canvas