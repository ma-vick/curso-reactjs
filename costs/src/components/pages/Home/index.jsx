import styles from './Home.module.css';
import LinkButton from '../../layout/LinkButton';
import savings from '../../../imgs/savings.svg';

export default function Home() {
    return (
      <section className={styles.home_container}>
        <h1>
          Bem-vindo ao <span>Costs</span>
        </h1>
        <p>
          Comece a gerenciar seus projetos agora mesmo!
        </p>
        <LinkButton 
          text="Criar Projeto"
          to="/newproject"
        />
        <img src={savings} alt="Costs" />
      </section>
    )
  }
  