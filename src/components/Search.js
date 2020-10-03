import React, { useState } from 'react'
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { actionTypes } from "../reducer";
import { useStateValue } from "../StateProvider";
import { initialState } from "../reducer";


function Search({ hideButtons = false }) {
  const [input, setInput] = useState('');
  const [{ }, dispatch] = useStateValue();
  const history = useHistory();
  const handleSearch = (e) => {
    e.preventDefault();
    history.push("/search");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

  }
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!hideButtons ? (
        <div className="search_buttons">
          <Button type="submit" onClick={handleSearch} variant="outlined">Google Search</Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
          <div className="search_buttons">
            <Button className="buttons_hidden" type="submit" onClick={handleSearch} variant="outlined">Google Search</Button>
            <Button className="buttons_hidden" variant="outlined">I'm Feeling Lucky</Button>
          </div>
        )}
    </form>
  )
}

export default Search;

