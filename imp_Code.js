








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
  


//   <form
//   action="/"
//   method="post"
//   required
//   class=" row row-cols-lg-auto   align-items-center mb-4 pb-2 "
// >
//   <div class="col-12">
//     <div class="form-outline">
      
//       <input
//         name="newItem"
//         required
//         maxlength="150"
//         id="form1"
//         class="form-control col-xs-4 form-group form-group-lg"
//       />
//     </div>
//   </div>

//   <div class="col-12">
//     <button type="submit" name="button" class="btn btn-primary">
//       Add
//     </button>
//   </div>

//   <!-- <div class="col-12">
//     <button type="submit" class="btn btn-warning">
//       Get tasks
//     </button>
//   </div> -->
// </form>