function convertToHTMLDateFormat(date) {
    // Extract year, month, and day components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Month starts from 0, so add 1
    const day = String(date.getDate()).padStart(2, '0');

    // Construct HTML date format string (YYYY-MM-DD)
    const htmlDateFormat = `${year}-${month}-${day}`;
    
    return htmlDateFormat;
}
