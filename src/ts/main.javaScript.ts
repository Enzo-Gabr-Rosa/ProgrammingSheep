import { JavaScriptController } from "./controladores/javaScript.controller";
import { ExJavaScript } from "./modelos/javaScript.modelo";

let controller: JavaScriptController = new JavaScriptController();

for ( let i = 1; i <= 10; i++){
    let exercicio = new ExJavaScript(i, i*5);

    controller.adicionarExercicio(exercicio)
}

function mostrarExercicio(num: number): void {
  // Pega todos os elementos com classe 'exercicio'
  const exercicios: NodeListOf<HTMLElement> = document.querySelectorAll('.exercicio');
  exercicios.forEach((div) => {
    div.style.display = 'none';
  });

  // Pega o exercício escolhido pelo id
  const selecionado = document.getElementById('exercicio' + num);

  if (selecionado) {
    selecionado.style.display = 'block';
  }
}



const editor = document.getElementById("editor") as HTMLTextAreaElement;
const output = document.getElementById("output") as HTMLPreElement;

function rodarPlayground(numEx: number):void{
  let posicao = controller.pegarPosicao(numEx)

  try {
    // Executa o JS escrito no textarea
    const result = new Function(editor.value)();
    output.textContent = String(result ?? "Código executado sem retorno");

    if (result === controller.exercicios[posicao].getResultado()){
      alert("GG")
    }

  } catch (error) {
    output.textContent = "Erro: " + (error as Error).message;
  }
  
}

window.mostrarExercicio = mostrarExercicio
window.rodarPlayground = rodarPlayground
