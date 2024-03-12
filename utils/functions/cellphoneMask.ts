export const cellphoneMask = async (value: string) => {

  // Máscara de 9 dígitos + DDD
  if (!value) return ""

  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, "($1) $2")
  value = value.replace(/(\d)(\d{4})$/, "$1-$2")

  return value
}