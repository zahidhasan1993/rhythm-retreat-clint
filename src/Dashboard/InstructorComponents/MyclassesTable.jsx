import React from 'react';

const MyclassesTable = ({index, item}) => {
    return (
        <tr>
                <th>
                  {index + 1}
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
                <td>{item.status}</td>
                <th>
                  0
                </th>
                <th>{item?.feedback?.feedback}</th>
              </tr>
    );
};

export default MyclassesTable;