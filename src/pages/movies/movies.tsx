/*import {
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  InputBase,
  Paper,
  Typography,
} from "@mui/material";*/
import { useCallback, useEffect, useState } from "react";
import { getShowsBySearch, ShowType } from "../../Api";
import { Link, useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const [currentSearch, setCurrentSearch] = useSearchParams();
  const [shows, setShows] = useState<ShowType[]>([]);

  const handleOnSearchChange = useCallback(
    (query: string) => {
      setCurrentSearch({ search: query });
    },
    [setCurrentSearch]
  );

  const isSearchButtonDisabled = () =>
    currentSearch.get("search")?.trim().length === 0;

  const handleOnSearch = useCallback(() => {
    getShowsBySearch(currentSearch?.get("search") || "").then((res: any) =>
      setShows(res)
    );
  }, [currentSearch]);

  useEffect(() => {
    const currentSearchStr = currentSearch?.get("search")?.trim();
    if (
      !!currentSearchStr &&
      currentSearchStr.length > 0 &&
      shows.length === 0
    ) {
      handleOnSearch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleOnSearch]);

  return (
    <>
      {/*<form onSubmit={(e:any) => {
              e.preventDefault();
            }}>
          <div className="wrap">
            <div className="search">
            <input
                type="text"
                className="searchTerm"
                placeholder="What are you looking for?"
                onChange={(e: any) => handleOnSearchChange(e.target.value)}
                value={currentSearch.get("search")}
                autoFocus
              />
<div className="searchButton" disabled={isSearchButtonDisabled()}
                onClick={handleOnSearch}></div>
            <FormControl>
              <Button
                disabled={isSearchButtonDisabled()}
                onClick={handleOnSearch}
              >
                Search
              </Button>
            </FormControl>
          </Paper>
        </Grid>
        <Grid item style={{ padding: "2em" }} sm={3}>
          {shows.map((el) => (
            <Link to={el.id.toString()}>
              <Card
                sx={{ display: "flex", alignItems: "center", margin: "2em" }}
              >
                <CardMedia
                  component="img"
                  height={140}
                  image={el.image}
                  alt={el.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {el.title}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          ))}
        </Grid>
          </Grid>*/}
    </>
  );
};

export default SearchPage;
