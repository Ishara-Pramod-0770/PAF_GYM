// import React from "react";
import RepeatIcon from "@mui/icons-material/Repeat";
import { Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import verification from "./verification.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MenuItem from "@mui/material/MenuItem";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import BarChartIcon from "@mui/icons-material/BarChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteOutlined } from "@mui/icons-material";
import ReplyModel from "./ReplyModel";
import React, { useState } from "react";

const TweetCard = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [openReplyModel,setOpenReplyModel]=useState(false);
  const handleOpenReplyModel =()=> setOpenReplyModel(true);
  const handleCloseReplyModel=()=> setOpenReplyModel(false)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleDelete = () => {
    console.log("Delete");
    handleClose();
  };
  // const handleOpenReplyModel = () => {
  //   console.log("Open Model");
  // };
  const handelCreateRetweet = () => {
    console.log("Handle Create Retweet");
  };
  const handelLikeRetweet = () => {
    console.log("Handel Like Retweet");
  };
  return (
    <div className="">
      {/* <div className='flex item-center font-semibold text-gray-700 py-2'>
        <RepeatIcon/>
        <p>You Retweet</p>
      </div> */}
      <div className="flex space-x-5">
        <Avatar
          onClick={() => navigate(`/profile/${6}`)}
          className="cursor-pointer"
          alt="username"
          src="http://localhost:3000/static/media/avatar.f48dd380aa7de7ba31ba.png"
        />
        <div className="w-full">
          <div className="flex justify-between items-center">
            <div className="flex cursor-pointer items-center space-x-2">
              <span className="font-semibold">Ishara Pramod</span>
              <span className="text-gray-600">@isharapramod . 2m</span>
              <img className="ml-2 w-5 h-5" src={verification} alt="" />
            </div>
            <div>
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <MoreHorizIcon />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <MenuItem onClick={handleDelete}>Delete</MenuItem>
                <MenuItem onClick={handleDelete}>Edit</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="mt-2">
            <div onClick={()=>navigate(`/twit/${3}`)} className="cursor-pointer">
              <p className="mb-2 p-0">Nice Project React and Spring boot !</p>
              <img
                className="w-[28rem] border border-gray-400 p-5 rounded-md"
                src="http://localhost:3000/static/media/avatar.f48dd380aa7de7ba31ba.png"
              />
            </div>
            <div className="py-5 flex flex-wrap justify-between items-center">
              <div className="space-x-3 flex items-center text-gray-600">
                <ChatBubbleOutlineIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>43</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                <RepeatIcon
                  className="cursor-pointer"
                  onClick={handelCreateRetweet}
                />
                <p>54</p>
              </div>
              <div
                className={`${
                  true ? "text-pink-600" : "text-gray-600"
                } space-x-3 flex items-center`}
              >
                {true ? (
                  <FavoriteIcon
                    className="cursor-pointer"
                    onClick={handelLikeRetweet}
                  />
                ) : (
                  <FavoriteOutlined
                    className="cursor-pointer"
                    onClick={handelLikeRetweet}
                  />
                )}
                <p>54</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <BarChartIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
                <p>430</p>
              </div>
              <div className="space-x-3 flex items-center text-gray-600">
                <FileUploadIcon
                  className="cursor-pointer"
                  onClick={handleOpenReplyModel}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <ReplyModel open={openReplyModel} handleClose={handleCloseReplyModel}/>
      </section>
      <React.Fragment/>
    </div>
  );
};

export default TweetCard;
