import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { CompanyInputs } from "./App";

type DisplayFormsProps = {
  data: CompanyInputs;
};

export default function DisplayForms({ data }: DisplayFormsProps) {
  const openPdfInNewTab = (file: File[]) => {
    const pdfData = file[0];

    const pdfBlob = new Blob([pdfData], { type: "application/pdf" });

    const pdfUrl = URL.createObjectURL(pdfBlob);

    window.open(pdfUrl, "_blank");
  };
  return (
    <>
      <div className="pb-8">
        <div className="px-4 sm:px-0">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Company Information
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Details about the company and the employees. (The structure of the submitted form's JSON can be viewed in the browser console log)
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Company name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {data.companyName}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Company email
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {data.companyEmail}
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Number of employees
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {data.numOfEmployees}
              </dd>
            </div>
            {data.description && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  Description
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {data.description}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
      <div className="border-b border-gray-100 pb-5">
        <h3 className="text-sm font-semibold leading-6 text-gray-900">
          Employee details
        </h3>
      </div>
      <ul
        role="list"
        className="divide-y max-w-5xl mt-6 mx-auto divide-gray-100 overflow-hidden bg-white shadow-sm ring-1 ring-gray-100 sm:rounded-xl"
      >
        {data?.employees?.map((employee) => (
          <li
            key={employee.employeeEmail}
            className="relative flex justify-between gap-x-6 px-4 py-5 hover:bg-gray-50 sm:px-6 cursor-pointer"
          >
            <div
              className="flex min-w-0 gap-x-4"
              onClick={() => openPdfInNewTab(employee.cv)}
            >
              {/* <img
              className="h-12 w-12 flex-none rounded-full bg-gray-50"
              alt=""
            /> */}
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  <span>
                    <span className="absolute inset-x-0 -top-px bottom-0" />
                    {employee.employeeName}{" "}
                    <span className="ml-1">({employee.employeeAge})</span>
                  </span>
                </p>
                <p className="mt-1 flex text-xs leading-5 text-gray-500">
                  <span className="relative truncate hover:underline">
                    {employee.employeeEmail}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-x-4">
              <div className="hidden sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  {employee.jobTitle}
                </p>
                <p className="mt-1 text-xs leading-5 text-indigo-600">
                  View CV
                </p>
              </div>
              <ChevronRightIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
