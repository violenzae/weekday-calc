class Date {
  constructor(day, month, year) {
  this.day = day;
  this.month = month;
  this.year = year;
  }

  calculate() {
  const t = [0,3,2,5,0,3,,5,1,4,6,2,4];
    if (this.month < 3) {
      this.year -= 1;
    }
  }
};