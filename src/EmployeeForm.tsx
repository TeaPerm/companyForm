import {
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { CompanyInputs } from "./App";
import TextInput from "./inputs/TextInputs";

type EmployeeFormProps = {
  register: UseFormRegister<CompanyInputs>;
  errors: FieldErrors<CompanyInputs>;
  index: number;
};

export function EmployeeForm({ register, errors, index }: EmployeeFormProps) {
  return (
    <div className="mx-10 max-w-5xl px-4 sm:px-6 lg:px-8 my-24">
      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
          <div>
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Employee Details ({index + 1})
            </h2>
          </div>

          <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
            <div className="sm:col-span-4">
              <label
                htmlFor="employeeName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Employee Name
              </label>
              <TextInput
                register={register(`employees.${index}.employeeName` as const, {
                  required: {
                    value: true,
                    message: "Please provide an Employee name.",
                  },
                })}
                type="text"
                id="employeeName"
                error={errors?.employees?.[index]?.employeeName}
              />
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="employeeEmail"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Employee Email
              </label>
              <TextInput
                register={register(`employees.${index}.employeeEmail` as const, {
                  required: {value: true, message: "Please provide an email."},
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email.",
                  },
                })}
                type="text"
                id="employeeEmail"
                error={errors?.employees?.[index]?.employeeEmail}
              />
            </div>
            <div className="sm:col-span-4">
              <label
                htmlFor="jobTitle"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Job title
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm sm:max-w-md">
                  <select
                    id="jobTitle"
                    {...register(`employees.${index}.jobTitle` as const, {
                      required: true,
                    })}
                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>Accountant</option>
                    <option>Software developer</option>
                    <option>Software tester</option>
                    <option>Manager</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="sm:col-span-4">
              <label
                htmlFor="employeeAge"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Employee Age
              </label>
              <TextInput
                register={register(`employees.${index}.employeeAge` as const, {
                  required: {
                    value: true,
                    message: "Please provide the employee's age.",
                  },
                  min: { value: 18, message: "Employee must be an adult." },
                  valueAsNumber: true,
                })}
                type="number"
                id="age"
                error={errors?.employees?.[index]?.employeeAge}
              />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="cv"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                CV
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                <div className="text-center">
                  <div className="mt-4 flex text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="cv"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <input
                        {...register(`employees.${index}.cv` as const, {
                          required: true,
                        })}
                        id="cv"
                        type="file"
                        accept="application/pdf"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    Must be in PDF format
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
