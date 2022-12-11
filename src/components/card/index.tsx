import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";
import "./card.css";
import useWindowSize from "../windowSize";
import { useTranslation } from "react-i18next";


export default function MediaControlCard(props: any) {
const {t}=useTranslation()

  return (
    <Card
      className="article-card"
      style={{
        display: useWindowSize() <= 767 ? "block" : "flex",
        boxShadow: " 0px 0px 30px -15px rgb(0 0 0 / 30%)",
        borderRadius: "20px",
      }}
    >
      <Box
        style={{
          width: props.image && window.innerWidth >= 767 ? "60%" : "100%",
          padding: props.image ? "100px 60px" : "50px 30px",
          direction: "rtl",

        }}
      >
        <CardContent>{props.children}</CardContent>
        <div style={{ marginRight: 30 }}>
          <Link to={props.path || "/"} className="link-btn">
            {t("read_more")}
            <ChevronLeftIcon />
          </Link>
        </div>
      </Box>
      {props.image ? (
        <CardMedia
          component="img"
          style={{ width: window.innerWidth >= 767 ? "40%" : "100%" }}
          image={props.image}
          alt="working-team"
        />
      ) : null}
    </Card>
  );
}
