import React, { Component } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import {Table} from 'react-bootstrap'
class CustomerTable extends Component {
    render() {
        return (
            <div className='customer-table-div'>
                <Table responsive="sm" className='custom-table'>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Customer</th>
                        <th>Name</th>
                        <th>Product</th>
                        <th> Amout</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td><FaUserCircle /></td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><FaUserCircle /></td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td><FaUserCircle /></td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default CustomerTable;
