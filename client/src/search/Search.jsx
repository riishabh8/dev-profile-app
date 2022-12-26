import "./search.css";

export default function search() {
  return (
    <>
      <div class="container wrap">
        <div class="search">
          <input
            type="text"
            class="searchTerm"
            placeholder="Search for Username"
          />
          <button type="submit" class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </>
  );
}
