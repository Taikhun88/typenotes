export default function Home() {
  return (
    <main className="container mt-5 text-center">
      <h1 className="display-4">Bienvenue dans votre gestionnaire de notes</h1>
      <p className="lead">
        Créez, organisez et retrouvez facilement vos notes personnelles.
      </p>
      <a href="/notes" className="btn btn-primary mt-4">
        Voir mes notes
      </a>
    </main>
  );
}
