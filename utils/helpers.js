module.exports = {
  format_date: (date) => {
    const options = {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate.replace(",", " at");
  },
};
