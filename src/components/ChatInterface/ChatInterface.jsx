import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { TextField, Button, Grid } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import Header from "../header/header";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

function ChatInterface() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    // Code to send message to AI backend and receive response

    const responseData = { text: "Response from AI" }; // Mock response for now
    setMessages([
      ...messages,
      { text: inputValue, sender: "user" },
      { text: responseData.text, sender: "ai" },
    ]);
    setInputValue("");
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <Grid container direction="column" marginTop={2} paddingX={2}>
      <div style={{ position: "relative" }}>
        <NavLink to={"/"}>
          <HomeOutlinedIcon
            sx={{
              bgcolor: "rgb(231, 132, 48)",
              fontSize: "50px",
              padding: "5px",
              borderRadius: "4px",
              position: "absolute",
              left: "10px",
              top: "20px",
            }}
          />
        </NavLink>
        <Header />
      </div>
      <Grid
        container
        overflow="auto"
        bgcolor="rgb(48, 48, 48)"
        height="70vh"
        borderRadius={1}
        padding={2}
      >
        <Grid item>
          {messages.map((message, index) => (
            <Grid item key={index} xs={12} style={{ marginBottom: "20px" }}>
              {message.sender === "user" ? (
                <div style={{ textAlign: "top" }}>
                  <strong style={{ color: "rgb(231, 132, 48)" }}>You</strong> <br />{" "}
                  {message.text}
                </div>
              ) : (
                <div style={{ textAlign: "bottom" }}>
                  <strong style={{ color: "rgb(42, 250, 255)" }}>AI</strong> <br />{" "}
                  {message.text}
                </div>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>

      <div style={{ position: "relative" }}>
        <Grid
          container
          sx={{
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            marginTop: "15px",
          }}
        >
          <Grid item xs={8}>
            <TextField
              sx={{
                bgcolor: "white",
                borderRadius: "4px",
                width: "90%",
              }}
              variant="outlined"
              placeholder="Type your message..."
              value={inputValue}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={1}>
            <Button
              sx={{
                bgcolor: "rgb(231, 132, 48)",
                height: "50px",
                "&:hover": {
                  bgcolor: "rgb(231, 132, 48)",
                },
              }}
              fullWidth
              variant="contained"
              onClick={sendMessage}
            >
              <ArrowForwardOutlinedIcon />
            </Button>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}

export default ChatInterface;
