function run(){
    let a=document.getElementById("cityname").value;
    let apkey="d010097515bdb765a6f6ef5949a3b83b"
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+a+"&appid="+apkey)
    .then(res=>res.json())
    .then(data=>{
        let city=data['name']
        let desc=data['weather']['0']['description']
        let tem=data['main']['temp']
        let wind=data['wind']['speed']
        function cal(val){
            return (val-273).toFixed(3);
        }
        document.getElementById("namen").innerHTML=`Weather of ${city}`;
        document.getElementById("named").innerHTML=`Sky Condition = ${desc}`;
        document.getElementById("namet").innerHTML=`Temperature = ${cal(tem)}`;
        document.getElementById("namew").innerHTML=`Wind Speed = ${wind}`;
    })
    .catch(err=> alert("Invalid city name"));
}