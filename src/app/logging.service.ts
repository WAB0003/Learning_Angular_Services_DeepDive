
// A SERVICE IS A REGULAR TYPESCRIPT CLASS, NO NEED TO IMPORT ANY DECORATORS
export class LoggingService {
    logStatusChange(status: string){
        console.log('A server status changed, new status: ' + status);
    }

}