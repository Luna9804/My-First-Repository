import "./styles.css";

export default function App() {
  function displayPerson(firstname, lastname) {
    return (
      <tr>
        <td> {firstname}</td>
        <td> {lastname}</td>
      </tr>
    );
  }
  return (
    <div className="App">
      <h1>Roster</h1>
      <table>
        {displayPerson("Matt", "Wojo")}
        {displayPerson("Chinaza", "Onwukanjo")}
        {displayPerson("Claudia", "Luna-Marcelino")}
        {displayPerson("Alex", "Sanchez")}
        {displayPerson("Herber", "Cruz")}
      </table>
    </div>
  );
}
