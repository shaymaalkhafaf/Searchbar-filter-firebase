import React from "react";

const SearchBar = () => {
  return (
    <div className="row">
      <div className="sixteen columns  sc-jobs">
        <div className="intro-banner-search-form">
          {/* Search Field */}
          <div className="intro-search-field">
            <label htmlFor="intro-keywords" className="field-title ripple-effect"></label>
            <input id="intro-keywords" name="search_keywords" type="text" placeholder="Job title, Skill, Industry" />
          </div>

          {/* Search Field */}
          <div className="intro-search-field with-autocomplete">
            <label htmlFor="search_location" className="field-title ripple-effect"></label>
            <div className="input-with-icon location">
              <input id="search_location" name="search_location" type="text" placeholder="City, State or Zip" />
              <a href="#"><i title="Find My Location" className="tooltip left la la-map-marked-alt"></i></a>
              <span className="type-and-hit-enter">type and hit enter</span>
            </div>
          </div>

          {/* Button */}
          <div className="intro-search-button">
            <button className="button ripple-effect">
              <span>Search</span>
              <i></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
