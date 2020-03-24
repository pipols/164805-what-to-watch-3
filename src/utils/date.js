const options = {year: `numeric`, month: `long`, day: `numeric`};

const reformatDate = (date) => new Intl.DateTimeFormat(`en-EN`, options).format(new Date(date));

export default reformatDate;
