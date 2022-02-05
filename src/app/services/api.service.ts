import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable({
    providedIn: "root",
})
export class ApiService {


    constructor(private httpClient: HttpClient) { }

    public getWrordDetails(txt:any): Observable<any> {
        
        const headers = {
            'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com',
            'x-rapidapi-key': 'e5d06fcbc1msh5ebcb7dec0a476cp1afa00jsnd9721da48b0c'
        }
        return this.httpClient.get<any>(`https://wordsapiv1.p.rapidapi.com/words/${txt}/typeOf`, { headers: headers });

    }
}

