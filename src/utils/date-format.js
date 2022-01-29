export default function formatDate(date) {
    const d = new Date(date);
    const month = (d.getMonth() + 1).toString();
    const day = d.getDate().toString();
    const year = d.getFullYear();

    return [year, month, day].join('-');
}
