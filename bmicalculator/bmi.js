function bmiCalculator(weight,height){
     //var bmi= weight/(height*height);
     var bmi= weight/Math.pow(height,2);
 return  Math.round(bmi);ore
 
}
  var bmi=bmiCalculator(65,1.8);
  console.log("bmi  value is "+bmi);