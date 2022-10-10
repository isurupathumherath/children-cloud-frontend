import React from "react";
import AddMedicineDetails from "../../components/model/medicine/AddMedicineDetails";
import MedicineTable from "./MedicineTable";

const SingleMedicineDetails = () => {
  return (
    <div class=" overflow-hidden flex flex-col justify-center space-y-2  rounded-xl max-w-[90rem] p-4 mb-4   ml-10 shadow-2xl">
      <p>Child Name : </p> <br />
      <AddMedicineDetails />
      <MedicineTable />
    </div>
  );
};

export default SingleMedicineDetails;
