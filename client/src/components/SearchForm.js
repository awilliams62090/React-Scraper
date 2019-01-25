import React from "react";

function SearchForm({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor=" Book Search">
          <h3>Enter a Book Title</h3>
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Anything Harry Potter is cool..."
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-secondary float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;
