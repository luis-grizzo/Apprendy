import React from 'react';
import { MdAdd } from 'react-icons/md';

import { Link } from 'react-router-dom';
import Menu from '../Menu';

import Navbar from '../../../components/Navbar';
import Button from '../../../components/Button';
import Footer from '../../../components/Footer';

import styles from '../Admin.module.sass';

const tools: React.FC = () => {
  return (
    <>
      <Navbar logged admin />
      <main className={styles.gridHalf}>
        <Menu />
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.header}>
              <h1>Ferramentas</h1>
              <Link to="/content/tool">
                <Button type="button" icon={MdAdd}>
                  Criar Ferramenta
                </Button>
              </Link>
            </div>
            <div className="comment">
              Aqui será inserido a tabela com as informações desta parte
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default tools;
