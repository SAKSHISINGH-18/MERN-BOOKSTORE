export function formatData(date) {
    return date.toLocaleDateString('en-US' , {
        month:'short',
        dat:'numeric',
        year:'numeric',
    })
}