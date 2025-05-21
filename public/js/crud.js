document.addEventListener("DOMContentLoaded", () => {
  // Função para excluir cadastro
  document.querySelectorAll(".btn-delete").forEach(button => {
    button.addEventListener("click", async () => {
      const id = button.getAttribute("data-id");
      const response = await fetch(`/cadastro/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        alert("Cadastro excluído com sucesso!");
        location.reload();
      } else {
        alert("Erro ao excluir cadastro.");
      }
    });
  });

  // Função para editar cadastro (exemplo básico)
  document.querySelectorAll(".btn-edit").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.getAttribute("data-id");
      // Aqui você pode abrir um modal ou redirecionar para uma página de edição
      alert(`Editar cadastro com ID: ${id}`);
    });
  });
});
