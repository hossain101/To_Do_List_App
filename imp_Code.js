








var day = listDate.day; //get today's date
var items = [];






app.get("/", function (req, res) {
    res.render("list", { kindOfDay: day, newListItems: items });
  });
  
  app.post("/", function (req, res) {
    console.log(req.body.newItem);
    items.push(req.body.newItem);
    res.redirect("/");
  });
  