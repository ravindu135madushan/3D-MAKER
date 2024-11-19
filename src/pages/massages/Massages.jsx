import React from 'react'
import{Link} from 'react-router-dom'
import "./Massages.scss"

const Massages = () => {

        const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true,  
    };

    const message = "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Nemo, dolore atque.Possimus tempora ducimus rerum animi reprehenderit voluptatum hic porro, dolore nisi culpa perspiciatis, dolor asperiores praesentium sequi corporis.Beatae.";
    
    return (
        <div className="massages">

                <div className="container">
                    <div className="title">
                        <h1>Messages</h1>
                    </div>
                    <table>
                        <tr>
                            <th>Buyer</th>
                            <th>Last Message</th>
                            <th>Date</th>
                            <th>Action</th>
                        </tr>
                        <tr className='active'>
                            <td>Tharuka Lakshan</td>
                            <td><Link to="/massage/123" className='link'>{message .substring(0,100)}...</Link></td>
                            <td>1 day ago</td>
                            <td><button>Mark as Read</button></td>
                            
                        </tr>
                        <tr className='active'>
                            <td>Tharuka Lakshan</td>
                            <td><Link to="/massage/123" className='link'>{message .substring(0,100)}...</Link></td>
                            <td>1 day ago</td>
                            <td><button>Mark as Read</button></td>
                            
                        </tr>
                        <tr>
                            <td>Tharuka Lakshan</td>
                            <td><Link to="/massage/123" className='link'>{message .substring(0,100)}...</Link></td>
                            <td>1 day ago</td>

                            
                        </tr>
                        <tr>
                            <td>Tharuka Lakshan</td>
                            <td><Link to="/massage/123" className='link'>{message .substring(0,100)}...</Link></td>
                            <td>1 day ago</td>
                           
                            
                        </tr>
                        <tr>
                            <td>Tharuka Lakshan</td>
                            <td><Link to="/massage/123" className='link'>{message .substring(0,100)}...</Link></td>
                            <td>1 day ago</td>
                           
                            
                        </tr>
                        <tr>
                            <td>Tharuka Lakshan</td>
                            <td><Link to="/message/123" className='link'>{message .substring(0,100)}...</Link></td>
                            <td>1 day ago</td>
                           
                            
                        </tr>
                    </table>
                </div>
            </div>

    );
};

export default Massages