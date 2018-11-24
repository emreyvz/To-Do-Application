export class DataService{

    tasks:string[] = ["Kayıt sayfası eklenecek.","Favicon değiştirilecek."]  ;
    finished:string[] = ["Login sayfası eklenecek.","Authguard eklenecek."]  ;

    getFinishedTasks(){
        return this.finished;
    }

    getCurrentTasks(){
        return this.tasks;
    }

    addTask(task:string){
        this.tasks.push(task);
    }

    deleteTask(task:string){
        this.tasks.splice(this.tasks.indexOf(task),1);
        this.finished.push(task);
    }


}