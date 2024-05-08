import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import banner from "./banner.jpg";
import verification from "./verification.png";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Tab from "@mui/material/Tab";
import MyWorkoutStatus from "../WorkoutStatus/MyWorkoutStatus";
import ProfileModel from "./ProfileModel";

const Profile = () => {
  const [tabValue, setTabValue] = useState("");
  const navigate = useNavigate();
  const [openProfileModel, setOpenProfileModel] = useState(false);
  const handleOpenProfileModel = () => setOpenProfileModel(true);
  const handleClose = () => setOpenProfileModel(false);
  const handleBack = () => navigate(-1);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    if (newValue === "3") {
      // Navigate to WorkoutStatusFeed page when "Media" button is clicked
      navigate("/workout-status-feed");
    }
  };

  return (
    <div>
      <section className={`bg-white z-50 flex items-center sticky top-0 bg-opacity-95`}>
        <KeyboardBackspaceIcon className="cursor-pointer" onClick={handleBack} />
        <h1 className="py-5 text-xl font-bold opacity-90 ml-5">Code With Ishara</h1>
      </section>
      <section>
        <img className="w-[100%] h-[15rem] object-cover" src={banner} alt="" />
      </section>
      <section className="pl-6">
        <div className="flex justify-between items-start mt-5 h-[5rem]">
          <Avatar
            className="transform -translate-y-24"
            alt="code with ishara"
            src="http://localhost:3000/static/media/avatar.f48dd380aa7de7ba31ba.png"
            sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
          />

          <Button onClick={handleOpenProfileModel} variant="contained" sx={{ borderRadius: "20px" }}>
            Edit Profile
          </Button>
        </div>
        <div className="">
          <div className="flex items-center">
            <h1 className="font-bold text-lg">Code With Ishara</h1>
            <img className="ml-2 w-5 h-5" src={verification} alt="" />
          </div>
          <h1 className="text-gray-500">@isharapramod</h1>
        </div>

        <div className="mt-2 space-y-3">
          <div className="py-1 flex space-x-5">
            <div className="flex item-center text-gray-500">
              <BusinessCenterIcon className="" />
              <p className="ml-2">Education</p>
            </div>

            <div className="flex item-center text-gray-500">
              <LocationOnIcon className="" />
              <p className="ml-2">Sri Lanka</p>
            </div>

            <div className="flex item-center text-gray-500">
              <CalendarMonthIcon className="" />
              <p className="ml-2">Joined Jan 2024</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                <Tab label="Tweets" value="1" />
                <Tab label="Replies" value="2" />
                <Tab label="Media" value="3" />
                <Tab label="Likes" value="4" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {/* Render tweets */}
            </TabPanel>
            <TabPanel value="2">users replies</TabPanel>
            <TabPanel value="3">
              <MyWorkoutStatus />
            </TabPanel>
            <TabPanel value="4">likes</TabPanel>
          </TabContext>
        </Box>
      </section>
      <section>
        <ProfileModel handleClose={handleClose} open={openProfileModel} />
      </section>
    </div>
  );
};

export default Profile;
