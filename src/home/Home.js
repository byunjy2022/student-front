import React from 'react'

export default function Home() {
  return (
    <div className="container">
        
        <h1>List users</h1>
        
        <table className='table'>
            <thead>
                <tr>
                    <th scope="col">s.n</th>
                    <th scope="col">Name</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                    <td>1</td>
                    <td>Byun JY</td>
                    <td>byunjy</td>
                    <td>byunjy@gmail.com</td>
                    <td>View-Edit-Del</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Kim JY</td>
                    <td>Kimjy</td>
                    <td>kimjy@gmail.com</td>
                    <td>View-Edit-Del</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Song JY</td>
                    <td>Songjy</td>
                    <td>Songjy@gmail.com</td>
                    <td>View-Edit-Del</td>
                </tr>
            </tbody>    
        </table>
    </div>
  );
}
