// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";


// const DynamicTittle = () => {


//     const location = useLocation()

//     useEffect(()=>{
// const path = location.pathname;
// let title = 'Marvel-Movies';
// if(path === '/'){
//     title ="Home / Marvel-Movies"
// }else if(path ==='/login'){
//     title ='Login / Marvel Movies'
// }else if(path ==='/register'){
//     title ="Register / Marvel Movies"
// }else if(path === '/movies'){
//     title ='Add Movies / Marvel Movies'
// }else if(path ==='/favorite'){
//     title ="My favorite /Marvel-Movies"
// }
// document.title = title
//     },[location.pathname])
//     return null; };

// export default DynamicTittle;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        let title = 'Marvel-Movies';
        if (path === '/') {
            title = "Home / Marvel-Movies";
        } else if (path === '/login') {
            title = 'Login / Marvel Movies';
        } else if (path === '/register') {
            title = "Register / Marvel Movies";
        } else if (path === '/movies') {
            title = 'Add Movies / Marvel Movies';
        } else if (path === '/favorites') {
            title = "My Favorites / Marvel-Movies";
        } else if (path === '/all-movies') {
            title = "All Movies / Marvel-Movies";
        }
        document.title = title;
    }, [location.pathname]);

    return null;
};

export default DynamicTitle;

