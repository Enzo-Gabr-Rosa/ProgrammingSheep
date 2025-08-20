import { ExJavaScript } from "../modelos/javaScript.modelo";


export class JavaScriptController{
    exercicios: ExJavaScript[] = [];

    private conferirID(ID:number): boolean{ //O ID pode ser adicionado?
        const posicao = this.pegarPosicao(ID)

        if (posicao === -1){
            return true
        }

        return false
    }

    public pegarPosicao(ID: number){
        const posicao = this.exercicios.findIndex(ex => ex.getID() === ID)
        return posicao;

    }

    public adicionarExercicio(exercicio: ExJavaScript): void {
        
        if (this.conferirID(exercicio.getID())){

            this.exercicios.push(exercicio)
        }
    }
}
