import React, {Component} from 'react'

class Calculator extends Component {
    state = {
        num1: '',
        num2: '',
        output: '',
        operator: 'Addition', //set to Addition because that is the select menu default 
    }

    changeOperator = (e) => {
        //e.preventDefault(); didnt need this
        //console.log(e.target.value); //changeOperator is attached to the select input tag and is able to grab that value of the chosen one and access it through e.target.value
        this.setState({
            operator: e.target.value,
            label: e.target.id
        })
    }

    //function should be able to change num1 or num2 depending on the value its passed 
    changeNum = (e) => {
        if(e.target.id === 'firstNum'){
            this.setState({
                num1: e.target.value
            })
        } else {
            this.setState({
                num2: e.target.value
            })
        }
    }

    //did not need to pass in e and sign, sign is sent as this.state.operator, in compute function, sign could be replaced with this.state.operator 
    compute = (e, sign)=> {
        //was hoping to pass in an operator through "sign = this.state.operator" but couldnt write operator statements with var instead of symbols, did if/else statements instead 
        if(sign === 'Addition'){
            this.setState({
                output: Number(this.state.num1) + Number(this.state.num2)
            })
        } else if (sign ==='Subtraction'){
            this.setState({
                output: Number(this.state.num1) - Number(this.state.num2)
            })
        } else if (sign === 'Division'){
            this.setState({
                output: Number(this.state.num1) / Number(this.state.num2)
            })
        } else if (sign === 'Multiplication'){
            this.setState({
                output: Number(this.state.num1) * Number(this.state.num2)
            })
        }
    }

    render() {
        return(
            <div className='container'>
                <h1>Basic Math with React!</h1>

                <div className='add'>
                    <input type='text' id='firstNum' placeholder={this.state.num1} onChange={(event) => this.changeNum(event)} value={this.state.num1}></input>
                    {/* <span>{this.state.operator}</span> */}
                    <select onChange={(event) => this.changeOperator(event)} value={this.state.operator}> 
                        {/* <option>Choose an Operator</option> */}
                        {/* originally tried to set it so that instead of the word the value was the sign but math operations could not compute a variable in place of + / - * */}
                        <option value='Addition'>+</option>
                        <option value= 'Subtraction'>-</option>
                        <option value='Division'>÷</option>
                        <option value='Multiplication'>×</option>
                    </select>
                    <input type='text' placeholder={this.state.num2} id='secondNum' placeholder={this.state.num2} onChange={(event) => this.changeNum(event)} value={this.state.num2}/>
                    <button onClick={(event) => this.compute(event, this.state.operator)}>=</button>
                    <h3>{this.state.operator} results go here!</h3>
                    <p>{this.state.output}</p>
                </div>
            </div>
        )
    }
}

export default Calculator