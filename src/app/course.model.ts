export class Course{
    constructor(
        public name?:string,
        public duration?:number,
        public price?:number,
        public rating?:number,
        public trainer?:string,
        public imageUrl?: string,
        public likes?:number
        ){

    }
}