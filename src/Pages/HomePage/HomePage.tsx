import React from "react";
import { CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import img1 from "../../Images/thor.jpg";
import img2 from "../../Images/407066.jpg";
import img3 from "../../Images/vnm.jpg";
import StyledDiv from "../../Components/Home/StyledDiv";
import StyledCard from "../../Components/Home/StyledCard";
import StyledCard2 from "../../Components/Home/StyledCard2";
import StyledButton from "../../Components/Home/StyledButton";

const Section = ({
  bgImage,
  cardComponent: CardComponent,
  title,
  description,
  buttonText,
  buttonClickPath,
}) => {
  console.log(46);
  const navigate = useNavigate();

  return (
    <StyledDiv bgImage={bgImage}>
      {/* <a href="https://ibb.co/0swYsy0"><img src="https://i.ibb.co/41Q41Rb/vnm.jpg" alt="vnm" border="0" /></a> */}
      <CardComponent>
        <CardContent>
          <Typography
            variant="h2"
            component="div"
            align="center"
            sx={{
              color: "white",
              fontFamily: "Bangers, cursive",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{ color: "white", fontFamily: "Bangers, cursive" }}
          >
            {description}
          </Typography>
          <StyledButton
            variant="contained"
            onClick={() => navigate(buttonClickPath)}
          >
            {buttonText}
          </StyledButton>
        </CardContent>
      </CardComponent>
    </StyledDiv>
  );
};

const HomePage = () => {
  return (
    <div>
      <Section
        bgImage="https://i.postimg.cc/jd9NH2Bc/thor.jpg"
        // <a href="https://ibb.co/v4ZHJt7"><img src="https://i.ibb.co/B2qtg1X/thor.jpg" alt="thor" border="0" /></a>
        cardComponent={StyledCard}
        title="Explore Characters with Marvel"
        description="Learn about your favorite Marvel characters, super heroes, and villains! Discover their powers, weaknesses, abilities,and more... From the Sentry's incredible strength and telepathic powers, to the intricate power dynamics between main and supporting characters, the Marvel Universe is filled with complex and compelling characters."
        buttonText="Explore characters"
        buttonClickPath="/characters"
      />
      <Section
        bgImage="https://i.postimg.cc/YSSHt2Cc/407066.jpg"
        cardComponent={StyledCard2}
        title="Read interesting stories with us"
        description="Dive into the captivating world of Marvel comics! Explore the original tales of your favorite Marvel characters, super heroes, and villains. Discover the intricate plots, character developments, thrilling action sequences, and more that have captivated comic book fans for decades."
        buttonText="Explore series"
        buttonClickPath="/series"
      />
      <Section
        bgImage="https://i.postimg.cc/DZ844K5H/vnm.jpg"
        cardComponent={StyledCard}
        title="Interconnection between series and characters"
        description="Explore the intricate web of interconnections between Marvel series and characters. From the Avengers to the X-Men, the Guardians of the Galaxy, and beyond, each series offers a unique perspective on the Marvel Universe. Learn about the relationships between characters, their shared stories, and how they influence each other."
        buttonText="See graph"
        buttonClickPath="/graph"
      />
    </div>
  );
};

export default HomePage;
