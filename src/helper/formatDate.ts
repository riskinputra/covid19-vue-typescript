import { format } from 'date-fns'

const formatDate = (date: string) => {
  return format(new Date(date), 'yyyy, MMM-dd')
}

export default formatDate