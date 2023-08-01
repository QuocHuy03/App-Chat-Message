const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = (req, res, next) => {
  const { username, password, email } = req.body;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        status: false,
        message: "Có lỗi xảy ra trong quá trình mã hóa mật khẩu",
      });
    }

    const user = new User({
      username,
      password: hash,
      email,
    });

    user
      .save()
      .then((result) => {
        const token = jwt.sign({ result }, "LeQuocHuy", { expiresIn: "7d" });

        res.status(201).json({
          status: true,
          message: "Đăng Ký Thành Công",
          accessToken: token,
        });
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      });
  });
};

exports.login = (req, res, next) => {
  const { username, password } = req.body;

  User.findOne({ username: username })
    .then((user) => {
      if (!user) {
        return res.status(500).json({
          status: false,
          message: "Tài khoản không tồn tại",
        });
      }

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          return res.status(500).json({
            status: false,
            message: "Có lỗi xảy ra trong quá trình xác thực mật khẩu",
          });
        }

        if (result) {
          const token = jwt.sign({ user }, "LeQuocHuy", {
            expiresIn: "7d",
          });

          return res.status(200).json({
            status: true,
            message: "Đăng nhập thành công",
            accessToken: token,
            role: user.role,
          });
        } else {
          return res
            .status(500)
            .json({ status: false, message: "Đăng nhập thất bại" });
        }
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.verifyAccessToken = async (req, res, next) => {
  const accessToken = req.headers.authorization.split(" ")[1];
  if (!accessToken) {
    return res.status(401).json({ message: "Access Token is missing" });
  }
  try {
    jwt.verify(accessToken, "LeQuocHuy", (err, decoded) => {
      if (err) {
        res.status(401).json({ message: "Unauthorized" });
      } else {
        res.json(decoded);
      }
    });
  } catch (error) {
    return res.status(401).json({ message: "Invalid Access Token" });
  }
};
