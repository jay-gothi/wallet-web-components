export class AppDate extends Date {
  shortMonthNames: string[] = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];  

  toStandardDate(): string {
    var mm = this.getMonth() + 1;
    var dd = this.getDate();

    return [this.getFullYear(),'-',
            (mm>9 ? '' : '0') + mm,'-',
            (dd>9 ? '' : '0') + dd
          ].join('');
  }

  toDateMonthStr(): string {
    var dd = this.getDate();
    return [
      (dd>9 ? '' : '0') + dd, ", ",
      this.shortMonthNames[this.getMonth()]
    ].join('')
  }
}
