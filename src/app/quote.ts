export class Quote {
    showInfo:boolean;
    constructor(public id:number,
        public quote:string,
        public name:string,
        public author:string,
        public upvote:number,
        public downvote:number,
        public dateAdded:Date){
            this.showInfo=false;
    }
}
