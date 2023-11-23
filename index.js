// ARRAY COM A LISTA DE TAREFAS
const tasks = [];

// OBJETO TAREFA
const task = {
  title: "",
  id: 0,
};

// ADICIONAR UMA TAREFA
function addTask() {
  const title = prompt("Digite o título da tarefa:"); // resposta do prompt
  let id = 0;
  if (tasks.length !== 0) {
    id = tasks[tasks.length - 1].id + 1;
  } else {
    id = 1;
  }

  const newTask = {
    ...task,
    title: title,
    id: id,
  };

  tasks.push(newTask);

  let addMore = confirm("Deseja adicionar mais uma tarefa?");
  if (addMore === true) {
    addTask();
  }
}

// EDITAR UMA TAREFA SALVA
function editTask() {
  if (tasks.length !== 0) {
    const selectedID = Number(
      prompt(`Qual tarefa deseja EDITAR? (Selecionar ID)
      ${tasks.map((task) => {
        return `
        id: ${task.id}
        Titulo: ${task.title}
        `;
      })}`)
    );
    tasks.map((task) => {
      if (task.id === selectedID) {
        const newTitle = prompt("Digite o novo titulo da tarefa");
        task.title = newTitle;
      }
    });
  } else {
    alert("Nenhuma tarefa salva");
  }
}

// REMOVER UMA TAREFA SALVA
function removeTask() {
  if (tasks.length !== 0) {
    const selectedID = Number(
      prompt(`Qual tarefa deseja APAGAR? (Selecionar ID)
      ${tasks.map((task) => {
        return `
        id: ${task.id}
        Titulo: ${task.title}
        `;
      })}`)
    );
    tasks.map((task, index) => {
      if (task.id === selectedID) {
        tasks.splice(index, 1);
      }
    });
  } else {
    alert("Nenhuma tarefa salva");
  }
}

// LISTAR TODAS AS TAREFAS SALVAS
function showTasks() {
  if (tasks.length !== 0) {
    alert(
      `${tasks.map((task) => {
        return `
      id: ${task.id}
      Titulo: ${task.title}
      `;
      })}`
    );
  } else {
    alert("Nenhuma tarefa salva");
  }
}

// PESQUISAR POR ID
function showTaskByID() {
  if (tasks.length !== 0) {
    const selectedID = Number(prompt(`Pesquisar tarefa por ID`));
    tasks.map((task) => {
      if (task.id === selectedID) {
        alert(`
          id: ${task.id}
          Titulo: ${task.title}
          `);
      }
    });
  } else {
    alert("Nenhuma tarefa salva");
  }
}

function showMenu() {
  const choice = Number(
    prompt(`Escolha uma opção:
    1- Adicionar tarefa
    2- Remover tarefa
    3- Editar tarefa
    4- Visualizar todas as tarefas
    5- Pesquisar tarefa por ID
    6- Sair`)
  );

  switch (choice) {
    case 1:
      addTask();
      showMenu();
      break;

    case 2:
      removeTask();
      showMenu();
      break;

    case 3:
      editTask();
      showMenu();
      break;

    case 4:
      showTasks();
      showMenu();
      break;

    case 5:
      showTaskByID();
      showMenu();
      break;

    case 6:
    case 0:
      break;

    default:
      alert("Escolha uma opção válida!");
      showMenu();

      break;
  }
}

showMenu();

// FUNÇÃO APENAS PARA VERIFICAR O ATUAL ARRAY DE TAREFAS ( PARA USO NO CONSOLE DO NAVEGADOR )
function showTasksOnConsole() {
  console.log("Lista de Tarefas: ", tasks);
}
