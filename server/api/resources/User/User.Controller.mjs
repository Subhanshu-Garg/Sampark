import httpStatus from "http-status";
import UserModel from "./User.Model.mjs";
import authUtils from "../../helpers/utils/authUtils.mjs";
import ApiError from "../../helpers/utils/apiError.mjs";

const { generateToken } = authUtils;

const UserController = {
    createUser,
    login,
    logout,
    updateUserById,
    deleteUserById,
    getUsers
}

export default UserController;

async function createUser(req, res, next) {
    const { body } = req;
    const user = await UserModel.create(body);
    const token = await generateToken({userId: user._id});
    res.status(httpStatus.CREATED).json({
        success: true,
        message: "User created successfully.",
        user,
        token
    })
}

async function login(req, res, next) {
    const { body } = req;
    const { mobileNumber, password } = body;
    console.log("login called");
    const user = await UserModel.findOne({mobileNumber});
    if(!user || !(await user.isPasswordMatch(password))){
        throw new ApiError(httpStatus.UNAUTHORIZED, 'Invalid credentials.', true)
    }

    const token = await generateToken({userId: user._id});
    console.log("login successful")
    res.status(httpStatus.OK).json({
        success: true,
        message: "Login Successful",
        user,
        token
    })
}


async function logout(req, res, next) {
    //This is to be done at client side by removing the header from the further request, (deleting the token from client local storage.)
    res.status(httpStatus.OK).json({ message: 'Logout successful' });
    next();
};

async function getUsers(req, res, next) {
    const {query} = req;
    const users = await UserModel.find(query);
    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully fetched all users.",
        users
    })
    next();
}

async function updateUserById(req, res, next) {
    const { params, body } = req;
    const { id } = params;
    const user = await UserModel.updateById(id, body);
    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Updated User",
        user
    })
    next()
}

async function deleteUserById(req, res, next) {
    const { params, body } = req;
    const { id } = params;
    const user = await UserModel.deleteById(id, body);
    res.status(httpStatus.OK).json({
        success: true,
        message: "Successfully Deleted User",
        user
    })
    next()
}