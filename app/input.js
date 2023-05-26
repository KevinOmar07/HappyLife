import React from "react";




 class Input extends React.Component{

    constructor() {
        super();
    }
    render() {

        return (
            <div className>
                <form>
                    <label className="form-label">{this.props.label}</label>
                    <br/>
                    <input type={this.props.type} name={this.props.name} className="form-control" placeholder={this.props.placeholder} value={this.props.valor}  onChange={this.props.onChange}/>
                    <br/>
                </form>

            </div>
        )
    }
}
export default Input;