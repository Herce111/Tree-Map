export class Item {
    public id:number = NaN;
    public nombre:string = "";
    public caratula:boolean = false;
    public hijos:Item[] = [];
    public file:string = "";

    constructor(other?: any){

        const thisKeys = Object.keys(this);
        const otherKeys = Object.keys(other || {});
        const commonKeys = otherKeys.filter(key => thisKeys.indexOf(key) >= 0);
        for (let key of commonKeys) {
            if (key === 'hijos') {
                this[key] = other['hijos'].map(c => new Item(c));
            } else {
                this[key] = other[key];
            }
        }
        
        
    }
                
}