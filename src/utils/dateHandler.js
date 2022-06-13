export function dateMonthHandler(dateString) {
    const date = new Date(dateString)

    const weekday = date.toLocaleDateString('en-GB', { weekday: 'long' })
    const day = date.getDate()
    const month = date.toLocaleString('en-GB', { month: 'long' })

    const formattedString = `${weekday}, ${month} ${day}`
    return formattedString.toUpperCase()
}

export function dateTimeHandler(dateString) {
    const date = new Date(dateString)

    const hours = date.getHours()
    const minutes = date.getMinutes()

    const formattedString = `${hours}:${minutes}`
    return formattedString
}