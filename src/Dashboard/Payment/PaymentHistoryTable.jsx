import React from 'react';

const PaymentHistoryTable = ({item,index}) => {
    console.log(item);
    return (
        <tr className="bg-base-200">
        <th>{index + 1}</th>
        <td>{item.tarnsitionId}</td>
        <td>{item.className}</td>
        <td>{item.date}</td>
      </tr>
    );
};

export default PaymentHistoryTable;