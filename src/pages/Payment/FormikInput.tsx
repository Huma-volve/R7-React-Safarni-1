import { useField } from "formik";

interface FormikInputProps {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  iconSrc?: string;
}

export default function FormikInput({
  label,
  name,
  placeholder,
  type = "text",
  iconSrc,
}: FormikInputProps) {
  const [field, meta] = useField(name);

  return (
    <div className="flex flex-col gap-1 w-full mb-4">
      <label className="text-sm font-medium">{label}</label>

      <div className="relative">
        {iconSrc && (
          <img
            src={iconSrc}
            alt=""
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
          />
        )}

        <input
          {...field}
          type={type}
          placeholder={placeholder}
          className="w-full border rounded-lg py-2 px-10"
        />
      </div>

      {meta.touched && meta.error && (
        <p className="text-red-500 text-xs">{meta.error}</p>
      )}
    </div>
  );
}
