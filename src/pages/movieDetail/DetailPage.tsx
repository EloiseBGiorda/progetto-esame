/*import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
} from "@mui/material";*/
import { useParams, useNavigate } from "react-router-dom";
import { Component, useEffect, useState } from "react";
import { getShowById, ShowDetailType } from "../../Api";

const DetailPage = () => {
  const { showId } = useParams();
  const [show, setShow] = useState<ShowDetailType | null>();

  useEffect(() => {
    if (!!showId) {
      try {
        const showIdNum = parseInt(showId);
        getShowById(showIdNum).then((res) => setShow(res));
      } catch (err) {
        console.error("NaN");
      }
    }
  }, [showId]);

  return (
    <>
      <button>
        {" "}
        {/* */}
        back
      </button>
      {/*<Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item style={{ padding: "2em" }} sm={5}>
          <Card sx={{ display: "flex", alignItems: "center", margin: "2em" }}>
            <CardMedia
              component="img"
              height={140}
              image={show?.image}
              alt={show?.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {show?.title}
              </Typography>
              Genres:
              {show?.genres.map((gen) => (
                <Typography gutterBottom variant="h6" component="div">
                  {gen}
                </Typography>
              ))}
              <Typography gutterBottom variant="h6" component="div">
                Starting date:
                {show?.startDate}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Ending date:
                {show?.endDate}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Rating:
                {show?.avgRating}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Summary:
                {show?.summary}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
              </Grid>*/}
    </>
  );
};

export default DetailPage;
