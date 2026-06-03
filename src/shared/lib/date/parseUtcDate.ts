

export const parseUtcDate = (date: string) => {
  return new Date(date.endsWith('Z') ? date : `${date}Z`)
}
