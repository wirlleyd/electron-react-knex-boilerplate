const {ipcMain} = require("electron");
const UserService = require("../../services/userService")
ipcMain.on("user:create", async (event, user) => {
    try{
      await UserService.create(user);
      event.returnValue = true
    }catch(err){
        event.returnValue = false
    }
});
