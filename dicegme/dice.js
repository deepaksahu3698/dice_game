function getvalue(){
    let p1=document.getElementById("member-1")
    let p2=document.getElementById("member-2")
    let p3=document.getElementById("member-3")
    let win=document.getElementById("winner")
    p1.innerText=""
    p2.innerText=""
    p3.innerText=""
    win.innerText=""

    var vl_p1=Math.floor(Math.random() * (7 - 1)) + 1;
    var vl_p2=Math.floor(Math.random() * (7 - 1)) + 1
    var vl_p3=Math.floor(Math.random() * (7 - 1)) + 1
    p1.innerText=vl_p1
    p2.innerText=vl_p2
    p3.innerText=vl_p3
    var grater=0
    if((vl_p1>=vl_p2)&&(vl_p1>=vl_p3)){
        grater=vl_p1
    }
    else if((vl_p2>=vl_p1)&&(vl_p2>=vl_p3)){
        grater=vl_p2
    }
    else{
        grater=vl_p3
    }
    // console.log(grater)
    win.innerText=grater
    Colorchange()

}
// function  Colorchange(){
//     let c1=document.getElementById("member-1")

//     let c2=document.getElementById("member-2")
//     let c3=document.getElementById("member-3")
//     c1_val=parseInt(c1.innerText)
//     c2_val=parseInt(c2.innerText)
//     c3_val=parseInt(c3.innerText)
//    if((c1_val>=c2_val)&&(c1_val>=c3_val)){
//        if((c1_val>c2_val)&&(c1_val>c3_val)){
//            c1.style.backgroundColor="green"
//        }
//        if((c1_val==c2_val)||(c1_val==c3_val)){
//         c1.style.backgroundColor="blue"
//        }
//    }
//    else if((c2_val>=c1_val)&&(c2_val>=c3_val)){
//     if((c2_val>c1_val)&&(c2_val>c3_val)){
//         c2.style.backgroundColor="green"
//     }
//     if((c2_val==c1_val)||(c2_val==c3_val)){
//      c2.style.backgroundColor="blue"
//     }
// }
// }