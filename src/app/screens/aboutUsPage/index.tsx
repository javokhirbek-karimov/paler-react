import React from "react";
import {
  Box,
  Card,
  CardContent,
  Container,
  Paper,
  Typography,
} from "@mui/material";
import {
  AccessTime,
  EmojiEvents,
  Security,
  Favorite,
} from "@mui/icons-material";
import Grid from "@mui/material/Grid";
import "../../../css/aboutUs.css";

const values = [
  {
    icon: <AccessTime sx={{ fontSize: 40 }} />,
    title: "Timeless Craftsmanship",
    description:
      "Every timepiece in our collection represents the pinnacle of horological artistry and precision engineering.",
  },
  {
    icon: <EmojiEvents sx={{ fontSize: 40 }} />,
    title: "Curated Excellence",
    description:
      "We select only the finest watches from renowned manufacturers, ensuring authenticity and superior quality.",
  },
  {
    icon: <EmojiEvents sx={{ fontSize: 40 }} />,
    title: "Curated Excellence",
    description:
      "We select only the finest watches from renowned manufacturers, ensuring authenticity and superior quality.",
  },
  {
    icon: <Security sx={{ fontSize: 40 }} />,
    title: "Trust & Authenticity",
    description:
      "Each watch comes with genuine documentation and our lifetime authenticity guarantee.",
  },
  {
    icon: <Favorite sx={{ fontSize: 40 }} />,
    title: "Passion for Time",
    description:
      "Our expert team shares your appreciation for fine timepieces and provides personalized service.",
  },
];

export function AboutUsPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Typography variant="h2" className="hero-title">
            About Paler
          </Typography>
          <Typography variant="h5" className="hero-subtitle">
            Where Time Meets Elegance
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" className="main-content">
        {/* Story Section */}
        <Box className="story-section">
          <Typography variant="h3" className="section-title">
            Our Story
          </Typography>
          <Typography variant="body1" paragraph className="story-text">
            Founded in 1987, Paler began as a small boutique in the heart of
            Geneva with a simple vision: to bring the world's most exceptional
            timepieces to discerning collectors and enthusiasts. What started as
            a passion project by master horologist Andreas Paler has grown into
            a globally recognized destination for luxury watches.
          </Typography>
          <Typography variant="body1" paragraph className="story-text">
            For over three decades, we have built relationships with the most
            prestigious watchmakers across Switzerland, Germany, and Japan. Our
            commitment to authenticity, expertise, and personalized service has
            made Paler synonymous with trust in the luxury watch industry.
          </Typography>
          <Typography variant="body1" paragraph className="story-text">
            Today, Paler serves clients from around the world, offering a
            carefully curated collection that spans from classic vintage pieces
            to contemporary masterworks. Each watch tells a story, and we're
            honored to help you find the timepiece that speaks to yours.
          </Typography>
        </Box>

        {/* Values Grid */}
        <Box className="values-section">
          <Typography variant="h3" className="section-title center">
            Our Values
          </Typography>
          <Grid container spacing={4}>
            {values.map((value, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card className="value-card">
                  <CardContent>
                    <Box className="value-icon">{value.icon}</Box>
                    <Typography variant="h5" className="value-title">
                      {value.title}
                    </Typography>
                    <Typography variant="body1" className="value-description">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Mission Section */}
        <Paper className="mission-section" elevation={0}>
          <Typography variant="h3" className="mission-title">
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph className="mission-text">
            At Paler, we believe that a fine watch is more than an instrument
            for telling time—it's a companion for life's most important moments,
            an heirloom to be treasured, and an expression of personal style and
            achievement.
          </Typography>
          <Typography variant="body1" className="mission-text">
            Our mission is to connect passionate collectors with extraordinary
            timepieces while providing the expertise, authenticity, and service
            that such precious objects deserve. We are custodians of horological
            heritage and partners in your journey through time.
          </Typography>
        </Paper>

        {/* Expertise Section */}
        <Box className="expertise-section">
          <Typography variant="h3" className="section-title">
            Expert Knowledge
          </Typography>
          <Paper className="expertise-content" elevation={1}>
            <Typography variant="body1" paragraph>
              Our team of certified horologists and watch specialists brings
              over 150 years of combined experience. We offer complimentary
              consultations to help you understand complications, movements, and
              the unique characteristics of each manufacturer.
            </Typography>
            <Typography variant="body1" paragraph>
              Whether you're acquiring your first luxury timepiece or adding to
              an established collection, we provide insights on investment
              value, maintenance requirements, and historical significance.
            </Typography>
            <Typography variant="body1">
              We also offer professional servicing, authentication services, and
              can source rare or discontinued models through our extensive
              network of trusted partners worldwide.
            </Typography>
          </Paper>
        </Box>
      </Container>
    </div>
  );
}
