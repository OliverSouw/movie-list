const Header = (props) => {
function handleSubmit(event) {
  event.preventDefault();
  const searchValue = event.target[0].value;

  props.onSubmit(searchValue);

  event.target[0].value = "";
}

  return (
    <section className="Header">
      <h1>DNC Movie List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Pesquise por filmes" />
      </form>
    </section>
  )
}

export default Header;