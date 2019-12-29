import React, { Component } from 'react'
import image from './images/chevrolet-cruze.jpg';

export default class Meme extends Component {
    constructor(){
        super()
        this.state={
            toptext:'',
            bottomtext:'',
            memeimg:image,
            allmeme:[],
        }

this.onClickHandle=this.onClickHandle.bind(this)
this.onChangehandler=this.onChangehandler.bind(this)
}

componentDidMount(){
fetch('https://api.imgflip.com/get_memes')
.then(response => response.json())
.then(wtf => {this.setState({allmeme:wtf.data.memes})
console.log(wtf)
})
}
// componentDidMount(){
//     fetch('https://api.imgflip.com/get_memes')
//     .then(response => response.json())
//     .then(response => {
//         const {memes}=response.data
//         this.setState({allmeme:memes})
//     console.log(memes)
//     console.log(this.state.allmeme)
//     })
//     }


onClickHandle=()=>{
 // if (this.state.allmeme.length===0){
        //     return <h1>loading...</h1>
        //   } else{
   const ranum = Math.floor(Math.random()*20)
   console.log(this.state.allmeme)
   const answer = this.state.allmeme[ranum].url
    this.setState({memeimg: answer})
    }





// .....................................................
//  ways to use on change event of inputbox   
// onChangetoptext=(e)=>{
//     this.setState({toptext:e.target.value})

// }
// onChangebottomtext=(e)=>{
//     this.setState({bottomtext:e.target.value})

// }
//        OR
//  onChangehandlertext=(event)=>{
//     const {name,value,checked,type}= event.target
// this.setState({[name]:value})

//  } OR
// ...........................


onChangehandler=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }

    render() {
       
        return (
            <div>
                <div className="inputbox">
                <input 
                type="text"
                value={this.state.toptext} 
                name="toptext"
                 onChange={this.onChangehandler}
                  placeholder="TopText"/>

                <input
                 type="text" 
                 value={this.state.bottomtext} 
                 name="bottomtext" 
                 onChange={this.onChangehandler}
                  placeholder="BottomText"/>

                <input type="submit" onClick={this.onClickHandle} value=" Next" />
                </div>
                
                <div className="meme">

                <h2 className="toptext"> {this.state.toptext}</h2>
               <br />
                <img alt="meme" src={this.state.memeimg} />
               
                <h2 className="bottomtext"> {this.state.bottomtext}</h2>
                </div>
                
            </div>
        )
    }
}

