// (function(){

    const arrivalBtn = document.getElementById('arrival');
    const departureBtn = document.getElementById('departure');
    const database = window.localStorage;

    

    //arrival
    arrivalBtn.addEventListener('click', () => {
    
        let date = todaysTimestamp();
        var data = database.getItem('workingData');
        
        
        
        if(data !== null){
            
            let parsedData = JSON.parse(data);
            let newTimestamp =  {
                "arrival":{
                    day: date.day,
                    month: date.month,
                    year: date.year,
                    hour: date.hour,
                    min: date.min
                }
            };

            //preverite, če že obstaja prihod z ten datumom
            //če obstaja izpišemo opozorilo :)
            var arivalExist = false;
            for (let prihod in parsedData) {
                if (parsedData[prihod].arrival.day === date.day && parsedData[prihod].arrival.month === date.month && parsedData[prihod].arrival.year === date.year)  {
                    arivalExist = true;
                    break;
                }
                
            }

            if(arivalExist){
                alert("already exist");      
            }
            else{
                parsedData.push(newTimestamp);
                database.setItem('workingData', JSON.stringify(parsedData));
            }

            
        }else{
            let addDate = `[
                {
                    "arrival":{
                        "day": ${date.day},
                        "month": ${date.month},
                        "year": ${date.year},
                        "hour": ${date.hour},
                        "min": ${date.min}
                    }
                }
            ]`;
            
            database.setItem('workingData', addDate);
        }
        
        
    });

    //departure
    departureBtn.addEventListener('click', () => {
        
        let date = todaysTimestamp();
        var data = database.getItem('workingData');

        let parsedData = JSON.parse(data);

        for (let prihod in parsedData) {
            if (parsedData[prihod].arrival.day === date.day && parsedData[prihod].arrival.month === date.month && parsedData[prihod].arrival.year === date.year)  {
                parsedData[prihod].departude = {
                    day: date.day,
                    month: date.month,
                    year: date.year,
                    hour: date.hour,
                    min: date.min
                };
                break;
            }
            
        }
        
        
        database.setItem('workingData', JSON.stringify(parsedData));
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