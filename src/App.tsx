import { useEffect, useState } from "react";
import CompanyForm from "./CompanyForm";
import { EmployeeForm } from "./EmployeeForm";
import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import axios from "axios";
import DisplayForms from "./DisplayForms";
import ModalWrapper from "./ModalWrapper";

export type CompanyInputs = {
  companyName: string;
  companyEmail: string;
  numOfEmployees: number;
  description: string;
  employees: [EmployeeInputs];
};

export type EmployeeInputs = {
  employeeName: string;
  employeeEmail: string;
  jobTitle: string;
  age: number;
  cv: File | null;
};

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<CompanyInputs>({ defaultValues: { numOfEmployees: 0 } });
  const [formDetailsOpen, setFormStateOpen] = useState(false);
  const [details, setDetails] = useState<any>([]);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "employees",
  });

  const onSubmit: SubmitHandler<CompanyInputs> = (data) => {
    console.log(data);
    setDetails(data);
    axios
      .post("myendpoint.com/api/companySubmit", data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));

    setFormStateOpen(true);
  };


  const numberOfEmp: number = watch("numOfEmployees");

  useEffect(() => {
    if (numberOfEmp <= 100) {
      const appendedArray = Array.from({ length: numberOfEmp }, () => ({
        employeeName: "",
        employeeEmail: "",
        jobTitle: "Accountant",
        age: 0,
        cv: null,
      }));
      remove();
      append(appendedArray, {
        shouldFocus: false,
      });
    }
  }, [append, remove, numberOfEmp]);

  return (
    <div className="pb-20">
      <CompanyForm
        register={register}
        onSubmit={onSubmit}
        handleSubmit={handleSubmit}
        errors={errors}
      />
      {fields.map((field, index) => (
        <div key={field.id}>
          <EmployeeForm register={register} errors={errors} index={index} />
        </div>
      ))}
      <ModalWrapper isOpen={formDetailsOpen} setIsOpen={setFormStateOpen}>
        <DisplayForms data={details} />
      </ModalWrapper>
    </div>
  );
}
