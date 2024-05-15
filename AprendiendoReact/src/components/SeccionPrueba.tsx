export default function SeccionPrueba() {
  let nombre = "Carlos";

  let HolaMundo = (nombre: string, edad: number) => {
    return (
      <div>
        <h2>Hola soy {nombre}</h2>
        <h3>Tengo {edad} años</h3>
      </div>
    );
  };

  return (
    <section id="content">
      <h2 className="subheader">Últimos artículos</h2>
      <p>Hola bienvenido a aprender React</p>
      {HolaMundo(nombre, 12)}
      <section className="componentes"></section>
    </section>
  );
}
