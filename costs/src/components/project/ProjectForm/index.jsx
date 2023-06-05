import { useEffect, useState } from "react";
import Input from "../../form/Input";
import Select from "../../form/Select";
import SubmitButton from "../../form/SubmitButton";
import styles from "./ProjectForm.module.css";

export default function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <form className={styles.form}>
      <Input
        text="Insira o nome do projeto"
        type="text"
        name="name_project"
        placeholder="Nome do projeto"
      />
      <Input
        text="Insira o orçamento do total"
        type="number"
        name="name_project"
        placeholder="Orçamento do projeto"
      />
      <Select
        name="category_id"
        text="Selecionar a categoria"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}
