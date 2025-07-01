const logUserAction = ({ userId, username, role, action, tokenName }) => {
  const ipAddress = "127.0.0.1"; // Placeholder - in production, you'd use a real IP
  const timestamp = new Date().toISOString();

  const logEntry = {
    id: Date.now().toString(),
    userId,
    username,
    role,
    action,
    loginTime: action === "login" ? timestamp : null,
    logoutTime: action === "logout" ? timestamp : null,
    ipAddress,
    tokenName,
  };

  const existingLogs = JSON.parse(localStorage.getItem("userLogs")) || [];
  existingLogs.push(logEntry);
  localStorage.setItem("userLogs", JSON.stringify(existingLogs));
};

export default logUserAction;
