import {
  SubmitHandler,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";
import { CompanyInputs } from "./App";
import TextInput from "./inputs/TextInputs";

type CompanyFormProps = {
  register: UseFormRegister<CompanyInputs>;
  handleSubmit: (
    onSubmit: SubmitHandler<CompanyInputs>
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  onSubmit: SubmitHandler<CompanyInputs>;
  errors: FieldErrors<CompanyInputs>;
};

export default function CompanyForm({
  register,
  handleSubmit,
  onSubmit,
  errors,
}: CompanyFormProps) {
  return (
    <div className="mx-10 max-w-5xl sm:px-6 lg:px-8 my-12 border rounded-xl p-8 border-black">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 pb-12 md:grid-cols-3">
            <div>
              <h1 className="font-bold leading-7 text-gray-900 text-xl">
                Company Detail
              </h1>
            </div>

            <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
              <div className="sm:col-span-4">
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company Name
                </label>
                <TextInput
                  register={register("companyName", {
                    required: {
                      value: true,
                      message: "Please enter a company name",
                    },
                  })}
                  type="text"
                  error={errors.companyName}
                  id="companyName"
                />
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="companyEmail"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company Email
                </label>
                <TextInput
                  register={register("companyEmail", {
                    required: {value: true, message: "Please provide an email."},
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Please enter a valid email.",
                    },
                  })}
                  type="text"
                  error={errors.companyEmail}
                  id="companyEmail"
                />
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="numOfEmployees"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Number of Employees
                </label>
                <TextInput
                  register={register("numOfEmployees", {
                    required: true,
                    valueAsNumber: true,
                    min: { value: 1, message: "Please enter a number from 1 to 100." },
                    max: {
                      value: 100,
                      message: "Please enter a number from 1 to 100.",
                    },
                  })}
                  type="number"
                  error={errors.numOfEmployees}
                  id="numOfEmployees"
                />
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    rows={3}
                    {...register("description")}
                    className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Write a few sentences about the company.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
          
        </div>
      </form>
    </div>
  );
}
