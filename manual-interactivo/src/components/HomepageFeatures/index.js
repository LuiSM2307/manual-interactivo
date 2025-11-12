import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: "Mantenimiento Preventivo Software",
    emoji: "🛡️",
    description: (
      <>
        Procedimientos y mejores prácticas para prevenir fallos de software
        mediante mantenimiento regular.
      </>
    ),
  },
  {
    title: "Mantenimiento Correctivo Software",
    emoji: "🔧",
    description: (
      <>
        Guías para diagnosticar y solucionar problemas de software cuando
        ocurren fallos.
      </>
    ),
  },
  {
    title: "Mantenimiento Preventivo Hardware",
    emoji: "💻",
    description: (
      <>
        Instrucciones para el mantenimiento físico preventivo de equipos y
        componentes.
      </>
    ),
  },
  {
    title: "Aprendizaje interactivo",
    emoji: "💡",
    description: (
      <>
        No solo es leer, tambien tendrás una variedad de ejercicios para un
        aprendizaje continuo.
      </>
    ),
  },
];

function Feature({ emoji, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <div className={styles.featureEmoji}>{emoji}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        
        <div className="text--center">
          <h2>Nuestras Áreas de Mantenimiento</h2>
          <p>
            Guías completas y prácticas para el correcto mantenimiento de
            sistemas
          </p>
        </div>

        <div className="row">
          {FeatureList.slice(0, 3).map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        <div className="row" style={{marginTop: '3rem'}}>
          <div className="col col--12">
            <div className={styles.specialFeature}>
              <div className={styles.specialEmoji}>💡</div>
              <h3>{FeatureList[3].title}</h3>
              <p>{FeatureList[3].description}</p>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <div className="text--center">
            <h2>¿A qué esperas?</h2>
              <p>Comienza a explorar nuestro manual interactivo ahora mismo</p>
              <Link
                className="button button--primary button--lg"
                to="/docs">
                Comenzar Ahora 🚀
              </Link>
          </div>
        </div>
        
      </div>
    </section>
  );
}
