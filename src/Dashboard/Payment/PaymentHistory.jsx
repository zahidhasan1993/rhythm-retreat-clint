import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import PaymentHistoryTable from "./PaymentHistoryTable";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axios = useAxiosSecure();
  const { data: myPayments = [] } = useQuery({
    queryKey: ["myClasses"],
    queryFn: async () => {
      const res = await axios(`/myclasses/${user?.email}`);
      return res.data;
    },
  });

  //   const dateObject = myPayments.map(dateSrring => new Date(dateSrring.date))
  //   const sortedDates = dateObject.sort((a, b) => b - a);
  //   console.log(sortedDates);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myPayments.map((payment,index) => (
              <PaymentHistoryTable
                key={payment._id}
                item={payment}
                index={index}
              ></PaymentHistoryTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
