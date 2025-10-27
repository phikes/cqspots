import capitalize from "lodash/capitalize"

export const getErrorMessage = (errors: Record<string, Array<string>>): string =>
  Object.keys(errors).map((field) => errors[field].map((message) => `${capitalize(field)} ${message}`).join(", ")).join(", ")
