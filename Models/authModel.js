const mongoose = require("mongoose");

const authSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email`,
    },
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountStatus: {
    type: String,
    enum: ["PENDING", "ACTIVE", "REJECTED"],
    default: "PENDING",
    required: true,
  },
  roles: {
    type: [String],
    required: true,
    default: "Student",
  },
});

const authModel = mongoose.model("Auth", authSchema);

module.exports = authModel;
