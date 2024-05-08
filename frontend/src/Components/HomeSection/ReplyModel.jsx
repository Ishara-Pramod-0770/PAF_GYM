import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";
import verification from "./verification.png";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { useFormik } from "formik";
import ImageIcon from "@mui/icons-material/Image";

const style = {
  position: "absolute",
  top : "50%",
  left : "50%",
  transform: "translate(-50%, -50%)",
  width : 600,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
  outline: "none",
  borderRadius: 4,
};

export default function ReplyModel({ open }) {
  const [uploadingImage, setUploadingImage] = React.useState(false);
  const [selectImage, setSelectedImage] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(open);
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    console.log("handleSubmit", values);
  };

  const formik = useFormik({
    initialValues: {
      content: "",
      image: "",
      twitId: 4,
    },
    onSubmit: handleSubmit,
  });

  const handleSelectImage = (event) => {
    setUploadingImage(true);
    const imgUrl = event.target.files[0];
    formik.setFieldValue("image", imgUrl);
    setSelectedImage(imgUrl);
    setUploadingImage(false);
  };

  return (
    <div>
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
              </div>

              <div className="mt-2">
                <div
                  onClick={() => navigate(`/twit/${3}`)}
                  className="cursor-pointer"
                >
                  <p className="mb-2 p-0">
                    Nice try ok!
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          <section className="py-10">
            <div className="flex space-x-5">
              <Avatar
                alt="username"
                src="http://localhost:3000/static/media/avatar.f48dd380aa7de7ba31ba.png"
              />
              <div className="w-full">
                <form onSubmit={formik.handleSubmit}>
                  <div>
                    <input
                      type="text"
                      name="content"
                      placeholder="What is happening"
                      className='border-none outline-none text-xl bg-transparent'
                      {...formik.getFieldProps("content")}
                    />
                    {formik.errors.content && formik.touched.content && (
                      <span className="text-red-500">
                        {formik.errors.content}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-5">
                    <div className="flex space-x-5 items-center">
                      <label className="flrx item-center space-x-2 rounded-md cursor-pointer">
                        <ImageIcon className="text-[#1d9bf0]" />
                        <input
                          type="file"
                          name="imageFile"
                          className="hidden"
                          onChange={handleSelectImage}
                        />
                      </label>
                      <FmdGoodIcon className="text-[#1d9bf0]" />
                      <TagFacesIcon className="text-[#1d9bf0]" />
                    </div>
                    <div>
                      <Button
                        sx={{
                          width: "100%",
                          paddingY: "8px",
                          paddingX: "20PX",
                          borderRadius: "20px",
                          bgcolor: "#1e88e5",
                        }}
                        variant="contained"
                        type="submit"
                      >
                        Click me
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </Box>
      </Modal>
    </div>
  );
}