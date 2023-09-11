class myDate{
    constructor(){
        this.today = new Date();

    }

    get day(){
        var options = {
            weakDay: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          };
        return this.today.toLocaleDateString("en-US", options); //get today's date in the format of "Monday, September 13"

    }
   
}


module.exports = new myDate();