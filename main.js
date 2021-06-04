var image=[
    "https://cdn2.vectorstock.com/i/1000x1000/44/16/smiling-mother-waving-hand-vector-21624416.jpg",
    "https://cdn.imgbin.com/14/14/4/imgbin-father-others-Cx0QP3BX1Q2LapVsFx6E0FuYA.jpg",
    "https://cdn5.vectorstock.com/i/1000x1000/45/09/cute-cartoon-a-young-mother-vector-4414509.jpg",
    "https://s3-eu-west-1.amazonaws.com/uploads.playbaamboozle.com/uploads/images/50835/1604322274_58740"
    
]
var i=0;
function next(){
i=i+1;
 if (i==4){i=0} 
  document.getElementById("Name"). innerHTML=names[i];
 document.getElementById ("FamilyImage").src= image[i];
}
var names=[
    "Me" ,
    "My Father" ,
    "My Mother" ,
    "My Sister",
    ];
       