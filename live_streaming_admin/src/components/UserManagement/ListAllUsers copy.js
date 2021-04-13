import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAllUsers, assignUserType} from '../../actions/userActions';
import {toast} from "react-toastify";
toast.configure()
class ListAllUsers extends Component{
    constructor(props){
        super(props)
        this.state = {
            usersData:[],
            filterData:[],
            userType:false,
            trainerType:false,
        }

    }
    async componentDidMount(){
       await  this.getAllUsersData();
    }

    getAllUsersData = async ()=>{
        await this.props.getAllUsers()
        console.log(this.props)
        if(this.props.user.response === true){
            this.setState({
                usersData:this.props.user.data,
                filterData:this.props.user.data
            })
            // toast.dismiss()
            toast.success(this.props.user.message, { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
        }else if(this.props.user.response === false){
            toast.dismiss()
            toast.error(this.props.user.message, { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
        }
    }

    msToTime= (s) =>{
        var ms = s % 1000;
        s = (s - ms) / 1000;
        var secs = s % 60;
        s = (s - secs) / 60;
        var mins = s % 60;
        var hrs = (s - mins) / 60;
      
        return hrs + ':' + mins ;
    }

    handleFilter = (e) =>{
        console.log(e.target.value)
        if(e.target.value === 'user' || e.target.value === 'trainer'){
            let filterData = this.state.usersData.filter(data => data.user_type === e.target.value);
            console.log(filterData)
            this.setState({
                filterData
            }, ()=>{console.log(this.state.usersData)})
        }else{
            let filterData = this.state.usersData
            this.setState({
                filterData
            }, ()=>{console.log(this.state.usersData)})
        }
    }

    handleChangeUserType = async (e, id, profile_setup) =>{
        // this.setState({
        //     filterData:[]
        // })
        if(profile_setup === true){
            const {checked, name} = e.target
            console.log(checked)
            let data ={
                user_id:id,
                user_type:name
            }
            this.props.assignUserType(data)
            if(this.props.user.response === true){
                await this.getAllUsersData()
                // // toast.dismiss()
                // toast.success(this.props.user.message, { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
            }else if(this.props.user.response === false){
                toast.dismiss()
                toast.error(this.props.user.message, { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
            }
        }else{
            toast.dismiss()
            toast.error("Can't assign, until user setup his/her profile", { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
        }        
    }

    render(){
        return(

            <div class="main-card mb-3 card">
                <div class="card-body"><h5 class="card-title">All Users</h5>
                    <span>Filter</span>
                    <select className="form-control" onChange={(e)=>this.handleFilter(e)}>
                        <option value="">Select To Filter</option>
                        <option value="user" >User</option>
                        <option value="trainer">Trainer</option>
                    </select>
                    <div class="table-responsive">
                        <table class="mb-0 table">
                            <thead>
                            <tr>
                                <th>S.no</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Email Verification</th>
                                <th>Profile Setup</th>
                                <th>User Type</th>
                                {/* <th>Action</th> */}
                            </tr>
                            </thead>
                            <tbody>
                                {this.state.filterData.length>0 
                                    
                                    ?
                                    this.state.filterData.map((data,i)=>{
                                        if(data.user_type === "user"){
                                            this.state.userType = true
                                            this.state.trainerType = false
                                        }else if(data.user_type === "trainer"){
                                            this.state.userType = false
                                            this.state.trainerType = true
                                        }
                                        return(
                                            <tr>
                                                <th scope="row">{i+1}</th>
                                                <td>{data.first_name || ''}</td>
                                                <td>{data.last_name || ''}</td>
                                                <td>{data.email || ''}</td>
                                                <td>
                                                    <div className={`badge ${data.verification === false ? 'badge-danger':'badge-success'}`}>{data.verification === false ? 'false' : 'true'}</div>
                                                </td>
                                                <td>
                                                    <div className={`badge ${data.profile_setup === false ? 'badge-danger':'badge-success'}`}>{data.profile_setup === false ? 'false' : 'true'}</div>
                                                </td>
                                                <td>
                                                    <div className={`badge ${this.state.userType ? 'badge-dark':'' }`}>
                                                        <input name="user" type="checkbox" label="user" onChange={(e)=>this.handleChangeUserType(e, data._id, data.profile_setup)} checked = {this.state.userType}/>&nbsp;<label>User</label>&nbsp;&nbsp;
                                                    </div>
                                                    <div className={`badge ${this.state.trainerType ? 'badge-info':'' }`}>
                                                        <input name="trainer" type="checkbox"  label="trainer" onChange={(e)=>this.handleChangeUserType(e, data._id, data.profile_setup)} checked = {this.state.trainerType}/>&nbsp;<label>Trainer</label>
                                                    </div>
                                                </td>
                                                {/* <td>
                                                    <div class="custom-checkbox custom-control">
                                                        <input name="user" type="checkbox" id="exampleCustomCheckbox" class="custom-control-input" onChange={(e)=>this.handleChangeUserType(e, data._id, data.profile_setup)} checked = {this.state.userType}/>
                                                        <label class="custom-control-label" for="exampleCustomCheckbox">
                                                            User
                                                        </label>
                                                    </div>
                                                    <div class="custom-checkbox custom-control">
                                                        <input name="trainer" type="checkbox" id="exampleCustomCheckbox" class="custom-control-input"  onChange={(e)=>this.handleChangeUserType(e, data._id, data.profile_setup)} checked = {this.state.trainerType}/>
                                                        <label class="custom-control-label" for="exampleCustomCheckbox">
                                                            Trainer
                                                        </label>
                                                    </div>
                                                </td> */}
                                                {/* <td>
                                                    <i className="fa fa-trash"></i>
                                                </td> */}
                                            </tr>
                                        )
                                    })

                                    :

                                    <div>
                                        No Record Found
                                    </div>
                                    
                                }    
                            </tbody>
                        </table>
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
export default connect(mapStateToProps, {getAllUsers, assignUserType})(ListAllUsers);