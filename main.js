window.addEventListener("load",() =>{
    let active = document.getElementById("Active");
    let activeP = document.getElementById("ActiveP");
    let activeD = document.getElementById("ActiveD");
    let activeU = document.getElementById("ActiveU");
    let date = document.getElementById("Date");

    

    const api ="https://api.covid19india.org/data.json";
    fetch(api).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        //let update =data.cases_time_series[(data.cases_time_series.length)-1];
        let update2 =data.statewise;
        
        active.textContent=update2[0].deltaconfirmed;
        date.textContent=update2[0].lastupdatedtime;

        for( let i=0 ; i<38 ; i++){
            if(update2[i].statecode == "DL"){
                activeD.textContent=update2[i].deltaconfirmed;
            }
            else if(update2[i].statecode == "UP"){
                activeU.textContent=update2[i].deltaconfirmed;
            }
            else if(update2[i].statecode == "PB"){
                activeP.textContent=update2[i].deltaconfirmed;
            }

            
        }

    })
});