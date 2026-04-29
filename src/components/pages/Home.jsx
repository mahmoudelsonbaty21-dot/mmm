import {Link} from 'react-router-dom'
function Home() {
    return ( 
        <>
        <header className="text-center ">
            <h1>المفروض كنت ابعتهالك يوم عيد ميلادك بس معرفتش استنا الصراحة</h1>
            <br />
            <Link to="/Mainpage"className="custom-link">show more</Link>
        </header>
        </>
     );
}

export default Home;