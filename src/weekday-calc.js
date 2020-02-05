export class Date {
  constructor(day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  minusYear() {
    if (this.month < 3) {
      return this.year -= 1;
    }
  }
  calculate() {
    const t = [0,3,2,5,0,3,5,1,4,6,2,4];
    let weekdaynum = (this.year + Math.round(this.year / 4) - Math.round(this.year / 100) + Math.round(this.year / 400) + t[this.month - 1] + this.day) % 7; 
    return weekdaynum;
  }
}
