const catchAsyncErrors = require("./catchAsyncErrors");

//const mToken = require('../utils/jwtToken');

const isAuthenticatedUser = catchAsyncErrors(async( req, res, next)=>{
  const token = res.cookies;
  console.log("amu in auth file");
  console.log(token);
  
});

module.exports = isAuthenticatedUser;