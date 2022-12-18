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
  const { t } = useTranslation()
  console.log("IMAGE", window.location.href.indexOf("blog"));

  return (
    <Card
      className="article-card"
      style={{
        display: "block",
        boxShadow: " 0px 0px 30px -15px rgb(0 0 0 / 30%)",
        borderRadius: "20px",
        border: 1, 
        height: window.location.href.indexOf("blog")!=-1 ?window.innerWidth>700?650:"100%":""
      }}
    >
      {props.image ? (
        <CardMedia
          component="img"
          style={{ width: "100%" }}
          image={props.image}
          alt="working-team"
        />
      ) : null}
      <Box
        style={{
          width: "100%",
          padding: props.image ? "10px 10px" : "50px 30px",
          direction: "rtl",

        }}
      >
        <CardContent>{props.children}</CardContent>
        <div style={{ padding: "16px", display: window.location.href.indexOf("blog") ? 'none' : '' }}>
          <Link to={props.path || "/"} className="link-btn">
            {t("to_apply")}
          </Link>
        </div>
      </Box>
  
    </Card>
  );
}
