const User = require("../models/user-schema");
const bcrypt = require("bcrypt");

class UserService {
  async createUser(userData) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const user = await User.create(userData);
    return user;
  }

  async authenticateUser(email, password) {
    const user = await User.findOne({ email });
    if (!user) {
      return { success: false, fail: "email" };
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return { success: false, fail: "password" };
    }
    return { success: true, user };
  }

  async getAllUsers() {
    return User.find();
  }

  // 관리자 권한
  async getUserById(userId) {
    return await User.findById(userId);
  }

  // 사용자 권한, req.token.userId == getUserById
  async getUserByToken(tokenUserId) {
    const user = await User.findById(tokenUserId);

    if (!user) {
      return null; // 사용자를 찾지 못한 경우 null 반환
    }

    return user.toObject(); // toObject 메서드 호출
  }


  // 사용자 권한
  async updateUser(userId, updates) {
    const user = await User.findByIdAndUpdate(userId, updates, {
      new: true,
      runValidators: true,
    });
    return user;
  }

  async deleteUser(userId) {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw { status: 404, message: "User not found" };
    }
    return user;
  }
}

module.exports = new UserService();
