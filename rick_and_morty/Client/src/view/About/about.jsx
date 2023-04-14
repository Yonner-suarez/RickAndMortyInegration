import style from "./about.module.css";
const About = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.info}>
        <h2 className={style.subt}>🚀Acerca de la App🚀</h2>
        <p className={style.description}>
          Esta aplicación tiene la finalidad de presentar la integración de los
          conceptos y la teoría aprendida a lo largo del Bootcamp de la carrera
          Full Stack de Henry. La App consiste en que, por medio de un
          identificador de personajes, se ingrese la identidad correspondiente,
          de esta manera se pedirá la información de un personaje en específico
          a través de un servidor. Además, se ofrece la opción de poder iniciar
          sesión y navegar por la aplicación, incursionando en la misma.
        </p>
        <p className={style.description2}>
          Mi nombre es Yonner Suárez y soy estudiante de la academia Henry.
        </p>
        <footer className={style.thanks}>Gracias.</footer>
      </div>
      <div className={style.img}>
        <img
          src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/244521550_1246182682563083_8366392019140271719_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFt_1MxIq6k2KH3BHzcxHnyXZKM7kJczc9dkozuQlzNz8becZ1R6eE0M1kmQhapn8aw1O8peRXyEKVkZScslNYS&_nc_ohc=z7LLQmSoU_wAX_RZz9B&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfDA7vpbAz4RiB4M8TUVFLmnaoC_Vm2_QMLrVwWw7bH4Iw&oe=641ED69A"
          alt=""
          className={style.imgReal}
        />
      </div>
    </div>
  );
};

export default About;
