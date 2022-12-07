function kiemtra() {
    let weight = document.getElementById("can_nang").value;
    let height = document.getElementById('chieu_cao').value;
    let result;
    let BMI = weight / ( height * height );
    if (BMI < 18.5){
         result ='Underweight';
    }else if ( BMI < 25){
        result = 'Normal';
    }else if ( BMI < 30){
      result = 'Overwight';
    }else if (30 <= BMI){
        result = 'Obese';
    }
    alert(result);
}
