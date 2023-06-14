import React from "react";
import { Link } from "react-router-dom";

const SelectedClassTable = ({cart,index,handleDelete}) => {
    const {className,image,instructor_name,price,class_id,_id} = cart;
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
                src={image}
                alt="Class image"
              />
            </div>
          </div>
        </div>
      </td>
      <td>
       {className}
      </td>
      <td>{instructor_name}</td>
      <td>
        ${price}
      </td>
        <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">delete</button>
        </td>
        <td>
        <Link to={`/dashboard/payment/${class_id}`} className="btn btn-ghost btn-xs">pay</Link>
        </td>
    </tr>
  );
};

export default SelectedClassTable;
