import React from "react";

import styles from "../styles/Profile.module.scss";
import { Layout } from "../layouts/Layout";
import { Button } from "antd";
import { checkAuth } from "../utils/checkAuth";

export default function ProfilePage() {
  return (
    <div className={styles.root}>
      <h1>Мой профиль</h1>
      <br />
      <p>
        Полное имя: <b>Amon Bower</b>
      </p>
      <br />
      <Button type="primary" danger>
        Выйти
      </Button>
    </div>
  );
}

ProfilePage.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async (ctx) => checkAuth(ctx);
