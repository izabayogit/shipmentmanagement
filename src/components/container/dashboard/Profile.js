import React, { Component } from 'react';
import {Card } from 'react-bootstrap'

class Profile extends Component {
    render() {
        return (
                <div className='profile-div'>
                    <Card className='profile-card'>     
                         <Card.Img variant="top" className='profile-pic' src="https://previews.123rf.com/images/kakigori/kakigori1502/kakigori150200058/36671336-positive-young-man-making-thumbs-up-sign-with-both-hands.jpg" />
                            <Card.Body>
                                <Card.Title className='profile-name'>Dumy John</Card.Title>
                                <Card.Text className='profile-role'>
                                    Admin
                                </Card.Text>
                            </Card.Body>
                    </Card>
                </div>
            
        );
    }
}

export default Profile;
