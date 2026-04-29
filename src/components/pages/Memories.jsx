import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../../services/booksservice";
import {Link } from 'react-router-dom'

function Memories() {
   const id= useParams().id;

   const [book,setBook]=useState({})

   useEffect(()=>{
    getBook(id)
    .then(res =>setBook(res.data))
   },[])
    
    return ( 
        <>
        <header className="bg-light text-dark text-center w-50 mx-auto container py-3 shadow rounded">
            <h1> Memories</h1>
        </header>

        <section className="my-5 text-center container">
            <div className="container">
  <div className="row">
    
    <div className="col-md-4">
      {<div class="card">
            <img src="/src/components/images/first.jpeg" className="custom-img card-img-top" style={{ height: "300px", objectFit: "cover"}}alt="..."/>
            <div class="card-header">
            <h3>14/12</h3>
            </div>
            <div class="card-body">
            <h5 class="card-title">دا يعتبر اول يوم بدأنا نذاكر فيه سوا كنت جاية من العبور فكنت قايلالي هتيجي الجامعة بدري ف اتفقنا هننزل نخلص النيتورك سوا و يوميها كان عندنا امتحان ملاك بردو ف قعدنا نحل شيت الmath سوا ممكن يبانلك حاجة تافهة اني احطها هنا بس حطيتها خلاص دا اليوم اللي جبتلك فيه الكيكة بردو</h5>
            <hr />
            </div>
            </div>}
    </div>
    

    <div className="col-md-4">
      {<div class="card">
            <img src="/src/components/images/second.jpeg" className="custom-img card-img-top"style={{ height: "300px", objectFit: "cover" }} alt="..."/>
            <div class="card-header">
            <h3>5/2</h3>
            </div>
            <div class="card-body">
            <h5 class="card-title"> الرحلةةة <br /> يوم الرحلة انا لما بتسأل عليه علي طول بقول انه وحش و مش عارف ايه بس في الحقيقة اليوم دا بالنسبالي كان حلو فشخ عشان حاجات كتير و احسن حتة فيه و احنا قاعدين بناكل شاورما علي البحر  لما كنا انا و انت و شهد و جوري قبل م الباقي يجولنا </h5>
            <br />
            <hr />
            </div>
            </div>}
    </div>

    <div className="col-md-4">
      {<div class="card">
            <img src="/src/components/images/third.jpeg" className="custom-img  card-img-top " style={{ height: "300px", objectFit: "cover" }}alt="..."/>
            <div class="card-header">
            <h3>12/2</h3>
            </div>
            <div class="card-body">
            <h5 class="card-title">الصراحة اليومدا انا بحبه فشخ كان يوم حلو الصراحة  قعدنا نهزر سوا و نحكي و نتحاكا زي م بنحكي علي طول ولما جبتلك الكتب و الصراحة (مش قصدي  )بس لما قولتيلي علي الحوار اللي كان مضايقك ساعة الامتحانات دي بتاع عيد ميلاد هاجر و قعدتي تقولي ان انت مبسوطة اني فكرت في كدا دا خلاني بحب اليوم دا اكتر</h5>
            <hr />
            </div>
            </div>}
    </div>

  </div>
  <br />
  <div className="col-md-4">
      {<div class="card">
            <img src="/src/components/images/Capture1.png" className="custom-img  card-img-top"style={{ height: "200px", objectFit: "contain" }} alt="..."/>
            <div class="card-header">
            <h5>مش عارف دا يوم كام الصراحة</h5>
            </div>
            <div class="card-body">
            <h5 class="card-title">حاجة هبلة بس انا بحب البلاي ليست دي دمها خفيف +دي حاجة انا و انت مشتركين فيا فقولت اضيفها</h5>
            <hr />
            </div>
            </div>}
    </div>
</div>
<br />
            <h5>هسيبه كدا و هفضل ازود عليه لما ترضي عني بقا(منك لله يا هاجر)</h5>
            
        </section>
        <Link to="/Mainpage"className="custom-link">Previous</Link>
        <Link to="/Shokran"className="custom-link">Next</Link>
        
        </>
    );
}

export default Memories;