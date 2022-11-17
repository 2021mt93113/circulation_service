const express=require('express');
const app=express();
const port = process.env.PORT || 3200;
app.listen(port, () => {
    console.log(`running at port ${port}`);
    });
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

const books = [{"id":"1", "name":"Programming with python", "reserved":null, "borrower":null},
               {"id":"2", "name": "Object oriented programming", "reserved":null, "borrower":null}]
const borrows = [];
/*** creating a New order*/

app.post("/new_borrow", (req, res) =>{
const borrow_book= req.body;

 if ( borrow_book.name || borrow_book.borrower ){
  for (let book of books){
    if (book.id == borrow_book.id & book.borrower==null){
        book.borrower=borrow_book.borrower
        res.status(200).json({
        message: "Record updated"
         })
    }else
    {
    res.status(401).json({
    message: "Book borrowed by another user"
 })
    }

 }
 }
 else {
 res.status(401).json({
    message: "Invalid operation"
 })
 }
});
