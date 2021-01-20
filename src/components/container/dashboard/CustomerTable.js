import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
import moment from 'moment'
import { Skeleton } from 'antd';

class CustomerTable extends Component {
    render() {
        const customers = this.props.customers?.data;
        console.log(this.props.customers, '.............');
        return (
          
            <div className='customer-table-div'>
            
                <Table responsive="sm" className='custom-table'>
                  
                    <thead>
                    <tr>
                        <th>CustomerID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Contact</th>
                        <th>Email</th>
                        <th> DateCreated </th>
                        <th> UserID</th>
                        <th> IsActive</th>
                    </tr>
                    </thead>
                   
                        <tbody>
                       { this.props.customers?.loading? 
                       <Skeleton active />:   
                          customers?.map((allCustomers) =>(allCustomers.map((customer, index)=>(
                        <tr key={index}>
                            <td>{customer.CustomerId}</td>
                            <td>{customer.Name} </td>
                            <td>{customer.Phone}</td>
                            <td>{customer.Contact}</td>
                            <td>{customer.Email}</td>
                            <td>  {moment(customer.DateCreated).format('MMMM Do YYYY')}</td>
                            <td>{customer.UserId}</td>
                            <td>{customer.IsActive}</td>
                        </tr>))
                    ))}
                        </tbody>
                     
                </Table>
            </div>
        );
    }
}

export default CustomerTable;
