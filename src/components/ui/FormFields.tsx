import { cn } from "@/lib/utils";

type FormFieldProps = {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  as?: "input" | "textarea" | "select";
  options?: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
  defaultValue?: string;
};

export function FormField({
  label,
  name,
  type = "text",
  required = false,
  as = "input",
  options,
  placeholder,
  className,
  defaultValue,
}: FormFieldProps) {
  const baseClass =
    "w-full rounded-lg border border-orange-100 bg-white px-3.5 py-2.5 text-sm text-brand-dark placeholder:text-brand-gray-text/60 focus:outline-none focus:ring-2 focus:ring-brand-orange/30 focus:border-brand-orange/50 transition-colors";

  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={name} className="block text-sm font-medium text-brand-dark">
        {label}
        {required ? <span className="text-brand-orange ml-0.5">*</span> : null}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={4}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={cn(baseClass, "resize-y min-h-[100px]")}
        />
      ) : as === "select" ? (
        <select
          id={name}
          name={name}
          required={required}
          defaultValue={defaultValue ?? ""}
          className={baseClass}
        >
          <option value="">Select...</option>
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={baseClass}
        />
      )}
    </div>
  );
}

type FormGridProps = {
  children: React.ReactNode;
  className?: string;
};

export function FormGrid({ children, className }: FormGridProps) {
  return (
    <div className={cn("grid sm:grid-cols-2 gap-5", className)}>{children}</div>
  );
}

type YesNoFieldProps = {
  label: string;
  name: string;
};

export function YesNoField({ label, name }: YesNoFieldProps) {
  return (
    <fieldset className="space-y-2">
      <legend className="text-sm font-medium text-brand-dark">{label}</legend>
      <div className="flex gap-4">
        {["Yes", "No"].map((val) => (
          <label key={val} className="flex items-center gap-2 text-sm text-brand-gray-text cursor-pointer">
            <input
              type="radio"
              name={name}
              value={val.toLowerCase()}
              className="accent-brand-orange"
            />
            {val}
          </label>
        ))}
      </div>
    </fieldset>
  );
}
