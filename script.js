// (function(){

    const arrivalBtn = document.getElementById('arrival');
    const departureBtn = document.getElementById('departure');
    const database = window.localStorage;

    

    //arrival
    arrivalBtn.addEventListener('click', () => {
    
        let date = todaysTimestamp();
        var data = database.getItem('workingData');
        
        
        
        if(data !== null){
            // let parsano = JSON.stringify(data);
            // parsano = JSON.parse(data);
           
            console.log(data);
        }else{
            let addDate = `[
                {
                    "arrival":"{
                        "day": "${date.day}",
                        "month": "${date.month}",
                        "year": "${date.year}",
                        "hour": "${date.hour}",
                        "min": "${date.min}"
                    }"
                }
            ]`;
            
            database.setItem('workingData', addDate);
        }
        
        
    });

    //departure
    departureBtn.addEventListener('click', () => {
        
        let date = todaysTimestamp();
                                                            
            
    });






    function todaysTimestamp(){
        let date = new Date();
        let day = date.getUTCDate();
        let month = date.getUTCMonth() + 1;
        let year = date.getUTCFullYear();
        let hour = date.getHours();
        let min = date.getMinutes();
        //pre minutaj kda odstevas pa dobijs 16:00 - 8:50 samo pristejes 60 ka dobijs pravo vrednost

        let formatedDate = {
            day: day,
            month: month,
            year: year,
            hour: hour,
            min: min
        };

        return formatedDate;
    }



// })();