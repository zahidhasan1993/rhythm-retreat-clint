import React from 'react';

const ManageClassesTable = ({item,index}) => {
    return (
        <tr>
        <th>
          {
            index + 1
          }
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src={item.image}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </td>
        <td>
          {item.className}
        </td>
        <td>{item.name}</td>
        <td>
          {item.email}
        </td>
        <td>{item.availableSeats}</td>
        <td>${item.price}</td>
        <td>{item.status}</td>
        <th>
            <button className='btn btn-xs btn-ghost'>Approve</button>
        </th>
        <th>
            <button className='btn btn-xs btn-ghost'>Deny</button>
        </th>
        <th>
            <button className='btn btn-xs btn-ghost'>Send Feedback</button>
        </th>
      </tr>
    );
};

export default ManageClassesTable;