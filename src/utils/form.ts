type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week"

interface FormField {
  id: string
  label: string
  path1: string
  path2: string
  type: InputType
  pattern?: string
  placeholder?: string
  required?: boolean
  divClass: string
  inputClass: string
}

export const FORM_FIELDS: FormField[] = [
  {
    id: "company",
    label: "Nombre de Contacto o Empresa:",
    path1: "M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z",
    path2:
      "M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z",
    type: "text",
    placeholder: "Nombre de Contacto o Empresa",
    pattern: "^[A-ZÁÉÍÓÚÑa-záéíóúñ]+(?:\\s[A-ZÁÉÍÓÚÑa-záéíóúñ]+)*$",
    divClass:
      "w-full bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
    inputClass:
      "w-full bg-gray-50 text-gray-800 placeholder-gray-400 text-sm rounded-lg p-2.5 lg:p-1.5 focus:outline-none focus:ring-blue-400",
  },
  {
    id: "email",
    label: "Correo:",
    path1:
      "M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z",
    path2:
      "M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z",
    type: "email",
    placeholder: "Correo",
    pattern: "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$",
    divClass:
      "w-full bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
    inputClass:
      "w-full bg-gray-50 text-gray-800 placeholder-gray-400 text-sm rounded-lg p-2.5 lg:p-1.5 focus:outline-none focus:ring-blue-400",
  },
  {
    id: "phone",
    label: "Teléfono:",
    path1:
      "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",
    path2: "M15 6h6m-3 -3v6",
    type: "tel",
    placeholder: "123-456-789",
    pattern: "[0-9]{3}[0-9]{3}[0-9]{3}",
    required: true,
    divClass:
      "w-full bg-gray-50 border border-gray-300 text-gray-800 placeholder-gray-400 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400",
    inputClass:
      "w-full bg-gray-50 text-gray-800 placeholder-gray-400 text-sm rounded-lg p-2.5 lg:p-1.5 focus:outline-none focus:ring-blue-400",
  },
]
