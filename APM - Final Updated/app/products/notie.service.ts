import {Injectable} from '@angular/core';

declare let notie:any;

@Injectable()
export class notieService {
    alert(options : any) : void {
        notie.alert(options);
    }
    confirm(options : any) : void {
        notie.confirm(options);
    }
}