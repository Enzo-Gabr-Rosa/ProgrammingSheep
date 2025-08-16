export class ExJavaScript{
    private ID: number;
    private resultado: number;

    constructor(ID:number, resultado:number){
        this.ID = ID;
        this.resultado = resultado
    }

    public getID():number{
        return this.ID
    }

    public setID(ID: number):void {
        this.ID = ID;
    }
    
    public getResultado():number{
        return this.resultado
    }

    public setResultado(resultado: number):void {
        this.resultado = resultado;
    }
}