import React, { Component } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import {Table} from 'react-bootstrap'
import { Scrollbars } from 'react-custom-scrollbars';
class CustomerTable extends Component {
    render() {
        return (
            <Scrollbars style={{ width: 600, height: 250 }}> 
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
                        <tr>
                            <td>4</td>
                            <td><FaUserCircle /></td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td><FaUserCircle /></td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td><FaUserCircle /></td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td><FaUserCircle /></td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td><FaUserCircle /></td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td><FaUserCircle /></td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td><FaUserCircle /></td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        </tbody>
                     
                </Table>
            </div>
            </Scrollbars> 
        );
    }
}

export default CustomerTable;
