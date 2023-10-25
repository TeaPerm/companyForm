type TextInputProps = {
  register: any;
  error: any;
  id: string;
  type: string;
};

export default function TextInput({ register, id,error,type }: TextInputProps) {
  return (
    <div className="mt-2">
      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
        <input
          type={type}
          id={id}
          {...register}
          className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        />
      </div>
      {error && <span>{error.message}</span>}
    </div>
  );
}
