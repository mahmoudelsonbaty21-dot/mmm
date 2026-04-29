import { useEffect, useState } from "react";
import { deletebook, getBooks } from "../../services/booksservice";
import {Link } from 'react-router-dom'
import Swal from "sweetalert2";
function Mainpage() {


   const [books,setbooks]=useState([])
   useEffect(()=>{
    getBooks()
    .then(res =>setbooks(res.data))
   },[])

   useEffect(()=>{
    getBooks()
    .then(res =>setbooks(res.data))
   },[books])

   const removeBook = (id) =>{
        Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
    }).then((result) => {
    if (result.isConfirmed){
        deletebook(id)
        .then(()=>{
            Swal.fire("Deleted!", "Book has been deleted.", "success");
        })
    }
    })
   }

    return (
        <>
        <header className="bg-light text-dark text-center w-50 mx-auto container py-3 shadow rounded" >
            <h1>Intro</h1>
            
        </header>
        <br />
        <h3> انا عارف اني بقول الكلام دا كتيييير فشخ فقولت اعمله بطريقة جديدة ممكن تشوفيها كرنج سيكا <br /> يا ملك انت بجد من احسن الناس اللي عرفتها في حياتي و مبسوط فشخ ان انا و انت صحاب و بجد انت من الحاجات القليلة اللي بحبها في الجامعة <br />يعني انت الصراحة من اكتر الناس اللي متوقعتش ان احنا نبقا صحاب بس في وقت قليل بقيتي اقرب صاحبة ليا عديتي هنا كمان و صحاب بجد مش دراسو بس او كدا <br /> يعني انا بعتبرك مش صاحبة جامعة اصلا زي م بتقوليلي علي طول <br />انا مكنتش عارف هعدي فترى انفصال اهلي من غيرك ازاي حاسس اني اخترت الشخص الصح اللي احكيله <br />كون اني اصلا مأمنك علي كل حاجة في حياتي و بحكيهالك دا معناه انك حد غالي عندي اوي مش محتاج اقول يعني</h3>
        
        <br />
        <Link to="/"className="custom-link">Previous</Link>
        <Link to="/Memories"className="custom-link">Next</Link>
        <section className="container my-5">
   
</section>
        </>
      );
}

export default Mainpage;