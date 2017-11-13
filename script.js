// (function(){

    const arrivalBtn = document.getElementById('arrival');
    const departureBtn = document.getElementById('departure');
    const database = window.localStorage;

    

    //arrival
    arrivalBtn.addEventListener('click', () => {
    
        let date = todaysTimestamp();
        var data = database.getItem('workingData');

        if(data !== null){
            
        }else{
            let dodajTaFilm = `[
                {
                    "sedemnajst": {
                        "november":[
                            {
                                "day": "2.11.2017 ",
                                "month": "8:00",
                                "year": "14:00",
                                "hour": "2.11.2017",
                                "min": {}
                            },
                        ],
                        "december":[]
                    },
                    "osemnajst":{
                        "januar":[],
                        "februar":[],
                        "marec":[],
                        "april":[],
                        "maj":[],
                        "junij":[],
                        "julij":[],
                        "avgust":[],
                        "septermber":[],
                        "oktober":[],
                        "november":[],
                        "december":[]
                    }
                }
            ]`;
            baza.setItem('mojiFilmi', dodajTaFilm);
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