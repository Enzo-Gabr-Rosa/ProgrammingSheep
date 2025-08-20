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




function rodarPlayground(numEx: number):void{
  let editor = document.getElementById("editor"+String(numEx)) as HTMLTextAreaElement;
  let output = document.getElementById("output"+String(numEx)) as HTMLPreElement;
  let posicao = controller.pegarPosicao(numEx)

  try {
    // Executa o JS escrito no textarea
    const result = new Function(editor.value)();
    output.textContent = String(result ?? "Código executado sem retorno");

    if (result === controller.exercicios[posicao].getResultado()){
      output.textContent = String(`
        Correto!
        Retorno: ${result}
        `);
    } else {
      output.textContent = String(`
        Errado :(
        Retorno: ${result ?? "Código executado sem retorno"}
        `)
    }

  } catch (error) {
    output.textContent = "Erro: " + (error as Error).message;
  }
  
}

window.mostrarExercicio = mostrarExercicio
window.rodarPlayground = rodarPlayground
