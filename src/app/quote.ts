export class Quote {
  push(quote: any) {
    throw new Error('Method not implemented.');
  }
    showInfo:boolean;
  length: any;
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
