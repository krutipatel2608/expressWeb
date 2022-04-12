const city_name = document.getElementById("city_name");
const cityname = document.getElementById("cityname");
const submitbtn = document.getElementById('submitbtn');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');

const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) => {
    event.preventDefault();
    let cityval = cityname.value;

    if(cityval == ""){
        city_name.innerText = "plz write the name before search";
        datahide.classList.add('data_hide');
    }
    else
    {
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=2305510244ccd76456e1855e95f835be`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = (arrData[0].main.temp-273.15).toFixed(2);
            
            const tempMood =arrData[0].weather[0].main;

            //Conditions to check sunny or cloudy
        if(tempMood == "Clear")
        {
          temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color:#eccc68';></i> ";
        }else if(tempMood == "Clouds")
        {
          temp_status.innerHTML = "<i class='fa-solid fa-cloud' style='color:#dfe4ea';></i> ";
        }else if(tempMood == "Rain")
        {
          temp_status.innerHTML ="<i class='fa-solid fa-cloud-rain style='color:#a4b0be';></i>";
        }else
        {
          temp_status.innerHTML ="<i class='fa-solid fa-sun' style='color:#eccc68';></i>"
        }
        datahide.classList.remove('data_hide');

        }catch
        {
            city_name.innerText = `plz Enter the city name properly.`;
            datahide.classList.add('data_hide');
        }
        }
        

    }


submitbtn.addEventListener("click", getInfo);