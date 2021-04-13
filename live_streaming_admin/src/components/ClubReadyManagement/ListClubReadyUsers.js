import React, { Component } from 'react';
import {getUsersList, getUserBilling, userCheckIn} from '../../actions/clubReadyActions';
import ReactPaginate from 'react-paginate';
import {connect} from 'react-redux';
import {toast} from "react-toastify";
import {Modal, Button, Row, Col, ListGroup} from 'react-bootstrap';

toast.configure();
const Stores = [
    {'StoreId':8958 , 'Location':'Agoura Hills - Hardcore Fitness'},
    {'StoreId':5754 , 'Location':'Anaheim - Hardcore Fitness'},
    {'StoreId':8232 , 'Location':'Hardcore Fitness Downtown LA'},
    {'StoreId':8915 , 'Location':'Huntington Beach- Hardcore Fitness'},
    {'StoreId':5839 , 'Location':'Lancaster - Hardcore Fitness'},
    {'StoreId':8976 , 'Location':'Las Vegas - Hardcore Fitness'},
    {'StoreId':5701 , 'Location':'North Country - Hardcore Fitness'},
    {'StoreId':6097 , 'Location':'Northridge - Hardcore Fitness'},
    {'StoreId':7250 , 'Location':'Winter Garden - Hardcore Fitness'},
    {'StoreId':3341 , 'Location':'Winter Park - Hardcore Fitness'},
    {'StoreId':7247 , 'Location':'Pasadena - Hardcore Fitness'},
    {'StoreId':4062 , 'Location':'Downtown - Hardcore Fitness'},
    {'StoreId':4151 , 'Location':'EI Cajon - Hardcore Fitness'},
    {'StoreId':9262 , 'Location':'Miramar - Hardcore Fitness'},
    {'StoreId':4152 , 'Location':'San Diego - Hardcore Fitness'},
    {'StoreId':8699 , 'Location':'San Marcos - Hardcore Fitness'},
    {'StoreId':2072 , 'Location':'Santa Clarita - Hardcore Fitness'},
];
class ListClubReadyUsers extends Component{
    constructor(props){
        super(props)
        console.log(props);
        this.state = {
            Stores:Stores,
            location:null,
            StoreId:null,
            isFormValid:false,
            ClubReadyUsersList:[],
            showDataTable:false,
            loader:false,
            filterUsers:[],
            searchValue:'',
            billingDetails:{
                Invoices:[]
            },
            modalShow:false,
            formErrors:{
                StoreId:''
            },
            //--  pagination --//
            currentPage:0,
            resultsPerPage:10
            //--  pagination --//
        }
    }

    handleChange = (e) =>{
        this.setState({filterUsers:[], currentPage:0})
        const {name, value} = e.target
        let formErrors = this.state.formErrors;
        let isFormValid = this.state.isFormValid
        console.log("Value -----> ", name, value );
        if (name === 'StoreId'){
            if(isNaN(value)){
                formErrors.StoreId = 'Not Valid';
                isFormValid = false
            }else{
                console.log(value.length)
                if(value.length < 4 || value.length > 4){
                    formErrors.StoreId = 'Not Valid';
                    isFormValid = false;
                }else{
                    formErrors.StoreId = ''
                    isFormValid = true;
                }
            }
        }
        this.setState({
            formErrors,
            isFormValid,
            searchValue:'',
            [name]:value
        }, ()=>console.log(this.state))
    }

    handleSubmit = async (e)=>{
        toast.dismiss()
        e.preventDefault();
        console.log("Form Submit")
        console.log(this.state.isFormValid)
        if(this.state.isFormValid){
            this.state.Stores.forEach(Store =>{
                if(Store.StoreId == this.state.StoreId){
                    this.setState({
                        location:Store.Location
                    })
                }
            })
            this.setState({
                loader:true
            })
            const data = {
                // ApiKey:process.env.REACT_APP_CLUB_READY_API_KEY,
                StoreId: this.state.StoreId
            }
            await this.props.getUsersList(data);
            console.log(this.props.clubReady);
            let ClubReadyUsersList = this.props.clubReady.length > 0 ? this.props.clubReady : [];
            let filterUsers = ClubReadyUsersList
            this.setState({
                ClubReadyUsersList,
                filterUsers,
                showDataTable:true,
                loader:false
            })
            toast.success('Club Ready Users Updated', { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
        }else{
            this.setState({
                loader:false
            })
            toast.error('Please Provide Store Id', { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true })
        }
    }

    handleOnShowBilling = async (UserId, Barcode) =>{
        this.setState({
            loader:true,
        })
        // console.log(userId)
        const data = {
            StoreId:this.state.StoreId,
            MemberId:UserId
        }
        await this.props.getUserBilling(data);
        console.log(this.props.clubReady)
        if(this.props.clubReady){
            let billingDetails = this.props.clubReady;
            if(billingDetails.Invoices){
                billingDetails.Invoices.reverse();
            }
            this.setState({
                billingDetails,
                modalShow:true,
                loader:false
            })
        }
        // const data = {
        //     StoreId:this.state.StoreId,
        //     Barcode,
        //     UserId,
        // }
        // await this.props.userCheckIn(data);
        // console.log("Checkin-----------------")
        // console.log(this.props.clubReady)
    }

    handleClose = () =>{
        this.setState({
            modalShow:false
        })
    }

    convertDate = (date)=>{
        // console.log("djskdjfbskndfkjbskjdf ksndfsdfsdfsdfsd:",   date)
        var UpdatedDate =  date.getDate()+'/'+(date.getMonth()+1)+'/'+ date.getFullYear();
        // console.log(UpdatedDate)
        return UpdatedDate;
    }

    handleInputChange = (e)=>{
        this.setState({
            filterUsers:this.state.ClubReadyUsersList,
            currentPage:0
        })
        console.log("Search Working....")
        const {value} = e.target
        let inputValue = value.trim();
        if(inputValue.length>0){
            let filterUsers = this.state.ClubReadyUsersList.filter( user =>{
                // console.log(user)
                if(user.Email){
                    return ((user.Email.toLowerCase().search(inputValue.toLowerCase()) !== -1) || (user.Username.toLowerCase().search(inputValue.toLowerCase()) !== -1))
                }else{
                    return ((user.Username.toLowerCase().search(inputValue.toLowerCase()) !== -1))
                }
            });  
            console.log(filterUsers)
            this.setState({
                filterUsers,
                searchValue:value
            }, () => console.log(this.state.searchValue))
        }else{
            this.setState({
                filterUsers:this.state.ClubReadyUsersList,
                searchValue:''
            })
        }
    }

    onCancelFilter = () =>{
        this.setState({
            filterUsers:this.state.ClubReadyUsersList,
            searchValue:''
        })
    }

    render(){
        const {formErrors, showDataTable, Stores, loader, modalShow, billingDetails} = this.state
                // ---- pagination ---- //
        const {currentPage, resultsPerPage, ClubReadyUsersList, filterUsers} = this.state
        console.log("Current Page ----->", currentPage)
        const pageNumbers = Math.ceil(filterUsers.length / resultsPerPage);
        console.log(filterUsers)
        const offset = currentPage * resultsPerPage;
        const currentResults = filterUsers.slice(offset, offset + resultsPerPage);
        console.log(currentResults)
        const paginate = e => this.setState({currentPage:e.selected});
        var badgeStatus = '';
        if(billingDetails != null){
            if(billingDetails.MemberStatus === 'Non-member'){
                badgeStatus = 'badge-danger'
            }else if(billingDetails.MemberStatus === 'Member'){
                badgeStatus = 'badge-success'
            }else if(billingDetails.MemberStatus === 'Frozen'){
                badgeStatus = 'badge-info'
            }else{
                badgeStatus ='';
            }
        }
       
        if(loader){
           return(
            <div className="main-card mb-3 card" style={{height:'100%'}}>
                <img src="assets/images/loader1.gif" height='100' width='100'/>
            </div>
           )
        }else{
            return(
                <>
                {billingDetails != null &&
                    <Modal show={modalShow} onHide={this.handleClose} scrollable centered size="lg">
                    <Modal.Header closeButton>
                    <Modal.Title> {billingDetails.FullName} Billing Status</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Row>
                        <Col md={6}>
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>Full Name: </strong> {billingDetails.FullName}</ListGroup.Item>
                                <ListGroup.Item><strong>Club: </strong>{billingDetails.HomeClub}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={6}>
                            <ListGroup variant="flush">
                                <ListGroup.Item><strong>Member Status: </strong> <div class={`badge ${badgeStatus}`}>{billingDetails.MemberStatus}</div></ListGroup.Item>
                                <ListGroup.Item><strong>User Type: </strong> {billingDetails.UserTypeName}</ListGroup.Item>
                            </ListGroup>
                        </Col>
                    </Row>
                    
                    <table class="mb-0 table table-striped">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Invoice No</th>
                                    <th>Amount Due</th>
                                    <th>Package Name</th>
                                    <th>Payment Due Date</th>
                                    <th>Payment Made Date</th>
                                    <th>Sales Tax Due</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                billingDetails.Invoices.length > 0     
                                ?
                                billingDetails.Invoices.map((data,i)=>{
                                    // AmountDue: 0.5
                                    // InvoiceId: 56402686
                                    // PackageName: "CRP Gateway Test"
                                    // PaymentDue: "2016-03-16T00:00:00.0000000"
                                    // PaymentMade: "2016-03-16T14:17:53.0000000"
                                    // SalesTaxDue: 0
                                    // Status: "Cancel"
                                    // StatusId: 7
                                    let badgeTitle = ''
                                    if(data.Status === 'Regular'){
                                        badgeTitle = 'badge-success'
                                    }else if(data.Status === 'Cancel'){
                                        badgeTitle = 'badge-danger';
                                    }else if(data.Status === 'Collect'){
                                        badgeTitle = 'badge-warning'
                                    }else if(data.Status === 'UnknownErr'){
                                        badgeTitle = 'badge-dark';
                                    }
                                    return(
                                        <tr key={i}>
                                            <th scope="row">{i+1}</th>
                                            <td>{data.InvoiceId || 'N/A'}</td>
                                            <td>{data.AmountDue || 'N/A'}</td>
                                            <td>{data.PackageName || 'N/A'}</td>
                                            <td>{data.PaymentDue ? this.convertDate(new Date(data.PaymentDue)) : 'N/A'}</td>
                                            <td>{data.PaymentMade ? this.convertDate(new Date(data.PaymentMade)) : 'N/A'}</td>
                                            <td>{data.SalesTaxDue || 'N/A'}</td>
                                            <td>
                                                <div class={`badge ${badgeTitle}`}>{data.Status || 'N/A'}</div>
                                            </td>
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>}
                 <div className="main-card mb-3 card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12 col-md-6">
                                <h3 className="card-title">CHOOSE STORE LOCATION</h3>        
                                <form className="needs-validation" onSubmit={this.handleSubmit}>
                                    <div className="form-row">
                                        <div className="col-md-8">
                                            <div className="position-relative form-group">
                                                {/* <label for="className" className="">Store</label> */}
                                                {/* <input name="StoreId" placeholder="Enter Store Id" type="text" className="form-control" onChange={e=>this.handleChange(e)} value={this.state.StoreId} required/> */}
                                                <select className="form-control" name="StoreId" onChange={e=>this.handleChange(e)} value={this.state.StoreId} required>
                                                    {Stores.length > 0 && <option Selected>Please Select Store Location</option>}
                                                    {Stores.length > 0 
                                                        ?
                                                        Stores.map((data,i) =>{
                                                            return(
                                                                <option value={data.StoreId} key={i}>{data.Location}</option>
                                                            )
                                                        })
                                                        :
                                                        <option>Empty</option>
                                                    }
                                                    
                                                </select>
                                                {formErrors.StoreId.length > 0 && (
                                                <span style={{color:'#e12800'}} className="mt-1">{formErrors.StoreId}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <button type="submit" role="button" className="mt-1 btn btn-primary" disabled={!this.state.isFormValid}>Submit</button> 
                                        </div>
                                    </div>
                                </form>
                            </div>
                         
                            {showDataTable && 
                            <div className="col-sm-12 col-md-6">
                                <h3 className="card-title">Filter By Email/Username</h3>
                                <div class="input-group">
                                    <input type="email" className="form-control" placeholder="Type to filter" onChange={e=>this.handleInputChange(e)} value={this.state.searchValue}/>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" onClick={()=>this.onCancelFilter()}>Cancel</button>
                                    </div>
                                </div> 
                            </div>}
                        </div>        
                    </div>
                </div>
                {showDataTable && 
                <div class="main-card mb-3 card">
                    <div class="card-body">
                        <h5 class="card-title"> {this.state.location} USER LIST</h5>
                        <table class="mb-0 table table-striped">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Username</th>
                                    <th>Barcode</th>
                                    <th>Contact No.</th>
                                    <th>Member Since</th>
                                    <th>Membership End Date</th>
                                    <th>Prospect Type</th>
                                    <th>Show Billing</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ClubReadyUsersList.length > 0 
                                
                                ?
                                (currentResults.length>0 ? currentResults : filterUsers).map((data,i)=>{
                                    // "UserId": 73158682,
                                    // "Prospect": true,
                                    // "DateAdded": "2020-07-01T15:28:11.2970000",
                                    // "Email": "charles@hardcorefitnessfl.com",
                                    // "FirstName": "Test",
                                    // "LastName": "Mctest",
                                    // "StoreId": 3341,
                                    // "Username": "TestVTRO",
                                    // "Address": "1111",
                                    // "City": "1111",
                                    // "State": "fl",
                                    // "Zip": "1111",
                                    // "Barcode": "00334173158682",
                                    // "Phone": "",
                                    // "CellPhone": "(407) 717-4028",
                                    // "ExternalUserId": "",
                                    // "ProspectTypeName": "Live Stream",
                                    // "DateOfBirth": "",
                                    // "MemberSinceDate": "",
                                    // "MembershipEndedDate": "",
                                    // "EmailOptOut": false,
                                    // "SmsOptOut": true,
                                    // "SmsOptIn": false,
                                    // "ReferralTypeId": 58614,
                                    // "ReferralTypeName": "Charles Lead"
                                    return(
                                        <tr>
                                            <th scope="row">{(currentPage) * 10 + (i+1)} </th>
                                            <td>{data.FirstName || 'N/A'}</td>
                                            <td>{data.LastName || 'N/A'}</td>
                                            <td>{data.Email || 'N/A'}</td>
                                            <td>{data.Username || 'N/A'}</td>
                                            <td>{data.Barcode || 'N/A'}</td>
                                            <td>{data.CellPhone || 'N/A'}</td>
                                            <td>{data.MemberSinceDate || 'N/A'}</td>
                                            <td>{data.MembershipEndedDate || 'N/A'}</td>
                                            <td>{data.ProspectTypeName || 'N/A'}</td>
                                            <td style={{textAlign:'center'}}>
                                                <i className="fa fa-eye" style={{cursor:'pointer'}} onClick={()=>{this.handleOnShowBilling(data.UserId)}}></i>&nbsp; 
                                            </td>
                                            {/* <td style={{textAlign:'center'}}>
                                                {data.Barcode ? <i className="fa fa-eye" style={{cursor:'pointer'}} onClick={()=>{this.handleOnShowBilling(data.UserId, data.Barcode)}}></i> :'N/A'}
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
                        <div className="mt-2" style={{float: 'right'}}>
                        {filterUsers.length > resultsPerPage && 
                        <ReactPaginate
                            previousLabel={'<<'}
                            nextLabel={'>>'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={pageNumbers}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={paginate}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                        />}
                        </div>
                    </div>
                </div>}
                </>
            )
        }          
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return{
        clubReady: state.clubReady.clubReady
    }
 }
export default connect(mapStateToProps, {getUsersList, getUserBilling, userCheckIn})(ListClubReadyUsers);