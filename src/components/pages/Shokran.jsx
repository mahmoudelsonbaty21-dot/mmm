import { useEffect, useState } from "react";
import { deletebook, getBooks } from "../../services/booksservice";
import {Link } from 'react-router-dom'
import Swal from "sweetalert2";
function Shokran() {
   const [books,setbooks]=useState([])
   useEffect(()=>{
    getBooks()
    .then(res =>setbooks(res.data))
   },[])

   useEffect(()=>{
    getBooks()
    .then(res =>setbooks(res.data))
   },[books])

   
    return (
        <>
        <header className="bg-light text-dark text-center w-50 mx-auto container py-3 shadow rounded">
            <h1>ِشكرا</h1>
        </header>
        
        <section className="container my-5">
    
        
        <table className="table table-striped">
       <thead>
        <tr>
            
            <td>شكرا انك موجودة علي طول و وانا بتكلم معاكي مش بحتاج اشرح كتير بتبقي علي طول فاهمة</td>
            <td>1</td>
        </tr>
         <tr>
            <td>شكرا انك و انت في مشاكلك بردو قاعدة و بتسمعي الحوارات اللي انا فيها و بتدوري معايا علي حلول</td>
            <td>2</td>
        </tr>
         <tr>
            <td>شكرا ان فترة انفصالهم كنت انت الوحيدة اللي معايا انا دي اكتر حاجة مش الفترة دي كانت ارخم وقت عدا عليا و انت خليتيه يعدي عليا عادي بمجرد انك موجودة</td>
            <td>3</td>
        </tr>
         <tr>
            <td>شكرا ان احنا بنذاكر سوا يعني بجد بعد ربنا مكنتش هوصل لدرجات الميد دي من غيرك حتى لو احنا بنذاكر 3 مواد بس اللي زي بعض بس الباقي علي الاقل بنشوف بعض مين خلص ايه و الجو دا</td>
            <td>4</td>
        </tr>
        <tr>
            <td>من الحاجات اللي مش هنساهالك بردو يوم تسليم اسايمنت النتورك في عز م انت عندك مشاكل و حوارات بس انا عطلت ساعتها في التسليم انا بس خلصته انت اللي عملتيلي الفايل و كان شكله فشيخ هي حاجة ممكن تبانلك تافهة فشخ بس انا بالنسبالي كبيرة كان سهل عليكيتقولي مش فاضية عادي بس انت معملتيش كدا</td>
            <td>5</td>
        </tr>
         <tr>
            <td>شكرا انك بتساعديني في اسايمنت الداتا بيز و بتساعدديني بضمير انا مكنتش هفهمه من غيرك و كنت هتسوح زي باقي العيال كدا </td>
            <td>6</td>
        </tr>
        </thead> 
        <tbody>
        </tbody>
    </table>
<h5>لو فضلت اكمل كدا هيبقا 10000 row</h5>
</section>
        <Link to="/Memories"className="custom-link">Previous</Link>
        
        </>
        
      );
}

export default Shokran;