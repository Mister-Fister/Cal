/*import React from "react";
import NumberInput from "./Numberinputs";
import Select from "react-select";
import Result from "./Result";

const CalculatorForm = () =>{
    return(
        <div>
            <from className="CalculatorForm">
                <NumberInput/>
                <NumberInput/>
                <Select/>
                <input type="submit" value="Spočítajte"/>
            </from>
            <Result />
        </div>
    )
}

export default CalculatorForm;*/

import React, {Component} from "react";
import NumberInput from "./Numberinputs";
import OperationSelect from "./OperationSelect";

export default class CalculatorForm extends Component{
    render(){
        return(
            <from className="CalculatorFrom">
                <NumberInput />
                <NumberInput />
                <OperationSelect />
                <input type="submit" value="Spočítaj" />
            </from>
        );
    }
}