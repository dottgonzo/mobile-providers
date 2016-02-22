
interface IGlobalProviders {

    country: string;
    providers: IProvider[];
}


interface IProvider {

    label: string;
    apn: string;
    phone: string;
    username: string;
    password: string;

}
class providers {
providers:IGlobalProviders[];
    constructor(){
       
    let providers: IGlobalProviders[] = require("./providers.json")
        this.providers=providers;

 
    }
    
    country(country){


        let localproviders = <IProvider[]>[];
        for (var i = 0; i < this.providers.length; i++) {

            if (this.providers[i].country.toLowerCase == country.toLowerCase) {

                for (var p = 0; p < this.providers[i].providers.length; p++) {



                    localproviders.push(this.providers[i].providers[p])



                }

            }

        }

        return localproviders



 
    }
    
}



export = providers;