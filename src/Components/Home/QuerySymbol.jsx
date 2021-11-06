import React from "react";
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
function QuerySymbol({ symbol, setSymbol, allSymbols }) {
  
  return (
    <div>
      {allSymbols && allSymbols.length && (
        <Autocomplete
          id="combo-box"
          value={symbol}
          options={allSymbols}
          getOptionLabel={(option) => option}
        //   style={{ width: 300 }}
          onChange={(event, newValue) => setSymbol(newValue)}
          renderInput={(params) => (
            <TextField {...params} label="Symbol Name" variant="outlined" />
          )}
        />
      )}
    </div>
  );
}

export default QuerySymbol;
