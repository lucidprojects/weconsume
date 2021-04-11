import Papa from 'papaparse';

const MYSHEET = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQLNYCe1yagGCePlBPasi2bjAGc3X4cPIeAxJPpegHjCdnJ7bRBRLZkqbSGvWyymACFbiABvhzzwRzK/pub?gid=871249801&single=true&output=csv";


// let co2eD = {
//     good: {
//         emissions: ''
//     },
//     bad: {
//         emissions: ''
//     }
// }


let co2eD = '';


//export function co2e(name) {
export function co2e() {

    return new Promise((resolve) =>{
            let myCo2e;

            Papa.parsePromise = function(file) {
            return new Promise(function(complete, error){
                Papa.parse(file, {download:true, header:true, complete, error});
            });
            };

            Papa.parsePromise(MYSHEET)
            .then(function(results) { 
                myCo2e = results.data[0].co2edaily;
                console.log(`my co2e = ${myCo2e}`);
                // co2eD.good.emissions = myCo2e;
                co2eD = myCo2e;
                setTimeout(() => {
                    resolve(
                    myCo2e = results.data[0].co2edaily,
                    co2eD = myCo2e + ' delay',
                    console.log(`my co2eD = ${co2eD} in first promise after 13.5 secs`)
                    )
                }, 13500)
            })  
            .then(
                setTimeout(() => {
                    resolve(
                    // co2eD[name]
                    co2eD
                    )
                }, 1500),
                setTimeout(() => {
                    resolve(
                    // co2eD[name]
                    co2eD = myCo2e + '15 delay',
                    console.log(`my co2eD = ${co2eD} after 15.5 secs`)
                    )
                }, 15500)
                );
          
        
    })

    

}