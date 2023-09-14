class myDate {
  constructor() {
    this.today = new Date();
  }

  get titleDay() {
    var options = {
      weakDay: "short",
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    return this.today.toLocaleDateString("en-US", options); //get today's date in the format of "Monday, September 13"
  }

  get addedDate() {
    var options = {
      weekday: "short",
      
      month: "short",
      day: "numeric",
    };
    // console.log(this.today.toLocaleDateString("en-US", options));
    return this.today.toLocaleDateString("en-US", options); //get today's date in the format of "Monday, September 13"
  }
}

module.exports = new myDate();
