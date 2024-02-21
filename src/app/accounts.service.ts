import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

// FOR INJECTING OTHER SERVICES WITHIN A SERVICE, ANGULAR REQUIRES METADATA TO RUN PROPERLY
// INJECTABLE LETS ANGULAR KNOW THAT THERE'S A ANOTHER SERVICE IS BEING INJECTED
@Injectable()
export class AccountsService {
    // CREATE AN OBJECT CONTAINING ACCOUNTS
    accounts = [
        {
        name: 'Master Account',
        status: 'active'
        },
        {
        name: 'Testaccount',
        status: 'inactive'
        },
        {
        name: 'Hidden Account',
        status: 'unknown'
        }
    ];

    statusUpdated = new EventEmitter<string>();

    // FOR INJECTING OTHER SERVICES WITHIN A SERVICE, ANGULAR REQUIRES METADATA TO RUN PROPERLY
    constructor(private loggingService: LoggingService){}

    addAccount(name:string, status:string){
        this.accounts.push({ name: name, status:status })
        // Newly provided when adding loggingService to Module:
        this.loggingService.logStatusChange(status);
    }

    updateStatus(id: number, status: string){
        this.accounts[id].status = status;
        // Newly provided when adding loggingService to Module:
        this.loggingService.logStatusChange(status);
    }

}