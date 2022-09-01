class NotFound {
  static notFoundPage = (req, res) => {
    return res.status(404).json({
      success: false,
      msg: "Page Not Found!",
    });
  };
}
module.exports = NotFound;
