import React, { Component } from 'react';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
            body:""
        }

        this.changeInput=this.changeInput.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    onSubmit(){
        for (const key in this.state) {
            if (this.state.hasOwnProperty(key)) {
                const txt = this.state[key];
                if(txt===""){
                    console.log(`${key}不可为空`);
                    return false;
                }
            }
        }
        
        fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(res=>res.json(res))
        .then(res=>{
            console.log(res)
        })


    }

    changeInput(event){
        event.preventDefault();
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>添加</h1>
                <div className="postform-item">
                    <label>标题</label>
                    <input type="text" name="title" onInput={this.changeInput} defaultValue={this.state.title} />
                </div>
                <div className="postform-item">
                    <label>内容</label>
                    <input type="text" name="body" onInput={this.changeInput} defaultValue={this.state.body} />
                </div>
                <div className="postform-item">
                    <label></label>
                    <button onClick={this.onSubmit}>提交</button>
                </div>
            </div>
        );
    }
}

export default PostForm;
