export const convertYearString = (format, year) => {
    if (year < 0) {
      return format(year);
    }
    return year.toString();
  };

export const timelineBCFormat = (value) => 
`${(value * -1).toString()} BC`;