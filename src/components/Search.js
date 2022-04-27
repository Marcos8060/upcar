import React from 'react'
import './css/search.css'
import SearchBar from "material-ui-search-bar";


function Search() {
  return (
    <>
      <div className="app__search">
          <div className="container">
              <div className="row">
                  <div className="col-md-7">
                    <div className="search__item">
                        <SearchBar
                        style={{
                            margin: "0 auto",
                            maxWidth: 400,
                            borderRadius: 30,
                            boxShadow: "0px 1px 8px 1px lightgray",
                        }}
                        />
                    </div>
                  </div>
              </div>
              
          </div>
      </div>
    </>
  )
}

export default Search