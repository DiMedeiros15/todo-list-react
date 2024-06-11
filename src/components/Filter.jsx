

export default function Filter( { filter, setFilter, setSort } ) {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-opt">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <div>
          <p>Ordem Alfabetica</p>
          <button onClick={() => setSort("Asc")}>Crescente</button>
          <button onClick={() => setSort("Desc")}>Decrescente</button>
        </div>
      </div>
    </div>
  );
}
