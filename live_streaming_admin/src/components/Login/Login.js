import React, { Component } from 'react';
import {connect} from 'react-redux';
import {userLogin} from '../../actions/userActions';
import {toast} from "react-toastify";
toast.configure()
const formValid = formErrors =>{
    let valid = true;
    Object.values(formErrors).forEach(val=>{
        val.length>0 && (valid = false);
    })

    return valid;
}
const emailRegex = RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:null,
            password:null,
            formErrors:{
                email:'',
                password:'',
            },
            isFormValid:false
        }
    }

    componentDidMount(){
        if (localStorage.getItem("userData")) {
            console.log(JSON.parse(localStorage.getItem('userData')))
            return this.props.history.push('/');
        }
    }

    handleSubmit = async (e) =>{
        toast.dismiss();
        e.preventDefault();
        if(formValid(this.state.formErrors)){
            let data={
                email:this.state.email,
                password:this.state.password
            }
            await this.props.userLogin(data)
            console.log(this.props.user.data)
            if(this.props.user.response === false){
                // alert(this.props.user.message)
                toast.error(this.props.user.message, { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true });
            }else if(this.props.user.response === true){
                // Remove all toasts !
                toast.success(this.props.user.message, { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true });
                let userData ={};
                // let token;
                userData.user_id = this.props.user.data._id;
                userData.first_name = this.props.user.data.first_name;
                userData.last_name = this.props.user.data.last_name;
                userData.token = this.props.user.token
                // localStorage.setItem('hardcoreLiveToken', JSON.stringify(token));
                localStorage.setItem('userData', JSON.stringify(userData));
                this.props.history.push('/')
            }
        }
    }

    handleChange = (e) =>{
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;
        switch(name){
            case 'email': formErrors.email = emailRegex.test(value) ? "" : "Invalid email address";
            break;
            case 'password': formErrors.password = value.length > 0  ? "" : "password required";
            break;
            default : break;
        }
        this.setState({
            formErrors, 
            [name]:value
        }, ()=>console.log(this.state))
    }

    render(){
        const {formErrors} = this.state;
        return(
            <div className="container">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5">
                    <img src="assets/images/Hardcore-LIVE_Logo.png" height="auto" width="100%"/>
                </div>
                <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5">
                            <div className="card-body">
                                <h5 className="card-title text-center">Admin Log In</h5>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-label-group mb-2">
                                        <input type="email" id="inputEmail" name="email" className="form-control" placeholder="Email address" onChange={e=>this.handleChange(e)} required autoFocus/>
                                        <label htmlFor="inputEmail"></label>
                                        {formErrors.email.length > 0 && (
                                            <span className="mt-2" style={{color:'#fb085f'}}>{formErrors.email}</span>
                                        )}                                 
                                    </div>
                                    <div className="form-label-group mb-3">
                                        <input type="password" id="inputPassword"  name="password" className="form-control" placeholder="Password" onChange={e=>this.handleChange(e)} required/>
                                        <label htmlFor="inputPassword"></label>
                                        {formErrors.password.length > 0 && (
                                            <span className="mt-2" style={{color:'#fb085f'}}>{formErrors.password}</span>
                                        )}
                                    </div>
                                    <button className="btn btn-lg btn-block text-uppercase" style={{backgroundColor:'#fb085f', color:'#fff'}} name="submit" type="submit">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
}


const mapStateToProps = (state) =>{
    console.log(state)
    return{
        user: state.user.user
    }
 }
export default connect(mapStateToProps, {userLogin})(Login);
