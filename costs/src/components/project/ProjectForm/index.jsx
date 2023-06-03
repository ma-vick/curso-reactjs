import styles from "./ProjectForm.module.css";

export default function ProjectForm() {
  return (
    <form>
      <div>
        <label htmlFor="name_project">Insira o nome do projeto</label>
        <input type="text" placeholder="Costs" name="name_project" />
      </div>
      <div>
        <label htmlFor="budget">Insira o orçamento total</label>
        <input type="number" placeholder="3000" name="budget" />
      </div>
      <div>
        <select name="category_id">
          <option disabled selected>
            Selecione a categoria
          </option>
        </select>
      </div>
    </form>
  );
}
