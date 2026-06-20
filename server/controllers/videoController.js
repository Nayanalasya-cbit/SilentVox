const Video = require("../models/Video");

const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find()
      .populate("uploadedBy", "name email")
      .sort({ createdAt: -1 });

    res.json(videos);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getAllVideos };