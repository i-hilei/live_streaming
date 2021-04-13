import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createLiveSchedule} from '../../actions/liveScheduleActions';
import {getAllUsers} from '../../actions/userActions';
import {toast} from "react-toastify";

toast.configure()
const formValid = formErrors =>{
    let valid = true;
    Object.values(formErrors).forEach(val=>{
        console.log(val)
        val.length>0 && (valid = false);
    })
    return valid;
}
class AddLiveSchedule extends Component{
    constructor(props){
        super(props)
        console.log(props)
        this.state = {
            isFormValid:false,
            class_name:'',
            class_type:'',
            trainer_name:'',
            equipments:'',
            scheduled_date:'',
            scheduled_time:'',
            formErrors:{
                class_name:'',
                class_type:'',
                trainer_name:'',
                equipments:'',
                scheduled_date:'',
                scheduled_time:'',
            },
            trainerList:[],
            errorClass:"color:red"
        }
    }

    componentDidMount(){
        this.getTrainersList();
        this.inputDate.min = this.checkMaxDate();
        console.log(this.inputDate)
    }

    getTrainersList = async ()=>{
        await this.props.getAllUsers()
        console.log(this.props)
        if(this.props.user.response === true){
            let trainerList = this.props.user.data.filter(data => data.user_type === 'trainer' && data.profile_setup === true);
            console.log(trainerList)
            this.setState({
                trainerList
            }, ()=>{console.log(this.state.trainerList)})
            // toast.dismiss()
            // toast.success(this.props.user.message, { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
        }else if(this.props.user.response === false){
            toast.dismiss()
            toast.error(this.props.user.message, { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
        }
    }

    handleChange = (e) =>{
        var currentDateTime = new Date();
        const {name, value} = e.target
        console.log(name +":"+ value)
        let formErrors = this.state.formErrors;
        switch(name){
            case 'class_name': formErrors.class_name = value.length < 3  ? "minimum 3 characters required" : "";
            break;
            case 'class_type': formErrors.class_type = value.length < 3  ? "minimum 3 characters required" : "";
            break;
            case 'trainer_name': formErrors.trainer_name = value.length < 3  ? "Please provide trainer name" : "";
            break;
            case 'equipments': formErrors.equipments = value.length > 0  ? "" : "Please provide equipments";
            break;
            case 'scheduled_date': formErrors.scheduled_date = value.length > 0 ? "" : "Please provide date";
            break;
            case 'scheduled_time': formErrors.scheduled_time = value.length > 0  ? "" : "Please provide time";
            break;
            default : break;
        }
        if(name === 'scheduled_date'){
            if(currentDateTime.toLocaleDateString() >= new Date(value).toLocaleDateString()){
                
                    this.setState({
                        scheduled_time:''
                    })
              
            }
            
        }
        if(name === 'scheduled_time'){
           
            console.log('Current Date: ', currentDateTime.toLocaleDateString() );
            var scheduled_date = new Date(this.state.scheduled_date)
            console.log('Selected Date', scheduled_date.toLocaleDateString())
            var currentTime = currentDateTime.toTimeString().split(" ")[0]
            if(currentDateTime.toLocaleDateString() >= scheduled_date.toLocaleDateString()){
                if(this.convertTimeInMilliseconds(value) <= this.convertTimeInMilliseconds(currentTime)){
                    formErrors.scheduled_time = "Time is less than current time"
                }
            }
        }
        

        this.setState({
            formErrors, 
            [name]:value   
        }, ()=>{console.log(this.state)})
        
    }
    convertTimeInMilliseconds = (time) =>{
        var timeParts = time.split(":");
        return (+timeParts[0] * (60000 * 60)) + (+timeParts[1] * 60000);
    }

    checkMaxDate = () =>{
        var dtToday = new Date();
        console.log(dtToday)
        var month = dtToday.getMonth() + 1;
        var day = dtToday.getDate();
        var year = dtToday.getFullYear();
        if(month < 10)
            month = '0' + month.toString();
        if(day < 10)
            day = '0' + day.toString();
        
        var maxDate = year + '-' + month + '-' + day;
        return maxDate;
    }

    handleSubmit = async (e) =>{

        e.preventDefault()
     
        console.log("Working....")
        if(formValid(this.state.formErrors)){
            let data = {
                class_name:this.state.class_name,
                class_type:this.state.class_type,
                trainer_id:this.state.trainer_name, // this will contain _id of the trainer (user)
                equipments:this.state.equipments,
                scheduled_date:this.state.scheduled_date,
                scheduled_time:this.convertTimeInMilliseconds(this.state.scheduled_time),
            }
            console.log(data)
            await this.props.createLiveSchedule(data);
            if(this.props.liveSchedule.response === true){
               
                toast.dismiss()
                toast.success(this.props.liveSchedule.message, { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
                this.setState({
                    class_name:'',
                    class_type:'',
                    trainer_name:'',
                    equipments:'',
                    scheduled_date:'',
                    scheduled_time:'',
                })
            }else if(this.props.liveSchedule.response === false){
                toast.dismiss()
                toast.error(this.props.liveSchedule.message, { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
            }
        }
    }

    render(){
        const {formErrors} = this.state;
        return(
            <div className="main-card mb-3 card">
                <div className="card-body">
                    <h3 className="card-title">ADD LIVE SCHEDULE</h3>
                    <form className="needs-validation" onSubmit={this.handleSubmit}>
                        <div className="form-row">
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                    <label for="className" className="">Class Name</label>
                                    <input name="class_name" placeholder="Enter Class Name" type="text" className="form-control" onChange={e=>this.handleChange(e)} value={this.state.class_name} required/>
                                </div>
                                {formErrors.class_name.length > 0 && (
                                    <span >{formErrors.class_name}</span>
                                )}
                            </div>
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                    <label for="classType" className="">Class Type</label>
                                    <input name="class_type" placeholder="Enter Class Type" type="text" className="form-control" onChange={e=>this.handleChange(e)} value={this.state.class_type} required/>
                                </div>
                                {formErrors.class_type.length > 0 && (
                                    <span >{formErrors.class_type}</span>
                                )}
                            </div>
                        </div>
                        <div className="form-row">
                            {/* <div className="col-md-6">
                                <div className="position-relative form-group">
                                    <label for="trainerName" className="">Trainer Name</label>
                                    <input name="trainer_name" placeholder="Enter Trainer Name" type="text" className="form-control" onChange={e=>this.handleChange(e)} value={this.state.trainer_name} required/>
                                </div>
                                
                            </div> */}
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                    <label for="trainerName" className="">Trainer Name</label>
                                    {/* <input name="trainer_name" placeholder="Enter Trainer Name" type="text" className="form-control" onChange={e=>this.handleChange(e)} value={this.state.trainer_name} required/> */}
                                    <select className="form-control" name="trainer_name" onChange={e=>this.handleChange(e)} value={this.state.trainer_name} required>
                                    {this.state.trainerList.length>0 && <option value="" selected>Please Select Trainer</option>}
                                    {this.state.trainerList.length>0 
                                            ?
                                            this.state.trainerList.map((data,i) =>{
                                                return(
                                                    <option value={data._id} key={i}>{data.first_name + " " + data.last_name}</option>
                                                )
                                            })
                                            :
                                            <option>No Trainer Found</option>
                                        }
                                        
                                    </select>
                                    {formErrors.trainer_name.length > 0 && (
                                        <span >{formErrors.trainer_name}</span>
                                    )}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                    <label for="equipments" className="">Equipments</label>
                                    <input name="equipments" placeholder="Enter Equipments" type="text" className="form-control" onChange={e=>this.handleChange(e)} value={this.state.equipments} required/>
                                </div>
                                {formErrors.equipments.length > 0 && (
                                    <span >{formErrors.equipments}</span>
                                )}
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                    <label for="date" className="">Scheduled Date</label>
                                    <input name="scheduled_date" placeholder="" type="date" ref={elem => this.inputDate = elem} className="form-control" onChange={e=>this.handleChange(e)} value={this.state.scheduled_date} required/>
                                </div>
                                {formErrors.scheduled_date.length > 0 && (
                                    <span >{formErrors.scheduled_date}</span>
                                )}
                            </div>
                            <div className="col-md-6">
                                <div className="position-relative form-group">
                                    <label for="classtype" className="">Scheduled Time</label>
                                    <input name="scheduled_time" placeholder="Enter Time" type="time" className="form-control" onChange={e=>this.handleChange(e)} value={this.state.scheduled_time} required/>
                                </div>
                                {formErrors.scheduled_time.length > 0 && (
                                    <span >{formErrors.scheduled_time}</span>
                                )}
                            </div>
                        </div>
                        <button type="submit" role="button" className="mt-2 btn btn-primary" disabled={!formValid(this.state.formErrors)}>Submit</button> 
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
        liveSchedule: state.liveSchedule.liveSchedule,
        user:state.user.user
    }
 }
export default connect(mapStateToProps, {createLiveSchedule, getAllUsers})(AddLiveSchedule);