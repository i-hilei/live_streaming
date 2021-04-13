import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getAllLiveSchedule, deleteLiveSchedule} from '../../actions/liveScheduleActions';
import {toast} from "react-toastify";

toast.configure()
class OnDemandModule extends Component{
    constructor(props){
        super(props)
        this.state = {
            liveScheduleData:[]
        }

    }
    async componentDidMount(){
        this.showLiveSchedule()
    }
    showLiveSchedule = async () =>{
        await this.props.getAllLiveSchedule()
        console.log(this.props)
        if(this.props.liveSchedule.response === true){
            this.setState({
                liveScheduleData:this.props.liveSchedule.data
            })
            toast.dismiss()
            toast.success(this.props.liveSchedule.message, { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
        }else if(this.props.liveSchedule.response === false){
            toast.dismiss()
            toast.error(this.props.liveSchedule.message, { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
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

    handleOnDelete = async(id)=> {
        await this.props.deleteLiveSchedule(id)
        console.log(this.props.liveSchedule)
        if(this.props.liveSchedule.response === true){ 
            toast.dismiss()
            toast.success(this.props.liveSchedule.message, { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
            this.showLiveSchedule()
        }else if(this.props.liveSchedule.response === false){
            toast.dismiss()
            toast.error(this.props.liveSchedule.message, { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
        }
    }

    render(){
        return(
            <div class="main-card mb-3 card">
                <div class="card-body"><h5 class="card-title">On Demand Video List</h5>
                    <table class="mb-0 table table-striped">
                        <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Program Name</th>
                            <th>Class Type</th>
                            <th>Trainer Name</th>
                            <th>Equipments</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {this.state.liveScheduleData.length>0 
                        
                        ?
                        this.state.liveScheduleData.map((data,i)=>{
                            return(
                                <tr>
                                    <th scope="row">{i+1}</th>
                                    <td>{data.class_name || ''}</td>
                                    <td>{data.class_type || ''}</td>
                                    <td>{data.trainer_id.first_name + " " + data.trainer_id.last_name || ''}</td>
                                    <td>{data.equipments || ''}</td>
                                    <td>{data.scheduled_date.split('T')[0] || ''}</td>
                                    <td>{this.msToTime(data.scheduled_time) || ''}</td>
                                    <td>
                                        <a className="fa fa-eye" onClick={()=>this.props.history.push(`/watch/${data.stream_name}`)}></a>&nbsp;
                                        <i className='fa fa-pencil-square-o'></i>    
                                    </td>
                                    {/* <td>
                                        <i className="fa fa-trash" onClick={()=>{this.handleOnDelete(data._id)}}></i>&nbsp;
                                        <i className='fa fa-pencil-square-o'></i>    
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
        )
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
        liveSchedule: state.liveSchedule.liveSchedule
    }
 }
export default connect(mapStateToProps, {getAllLiveSchedule, deleteLiveSchedule})(OnDemandModule);