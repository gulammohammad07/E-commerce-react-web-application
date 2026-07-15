import {
  buildGoogleAuthUrl,
  clearSessionCookie,
  createSession,
  deleteSession,
  exchangeGoogleCode,
  readRedirectFromState,
  setSessionCookie,
} from "../services/authService.js";

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";

export const startGoogleLogin = (req, res) => {
  try {
    const authUrl = buildGoogleAuthUrl(req.query.redirect);
    res.redirect(authUrl);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const completeGoogleLogin = async (req, res) => {
  const redirectPath = readRedirectFromState(req.query.state);

  try {
    const user = await exchangeGoogleCode(req.query.code);
    const sessionId = createSession(user);

    setSessionCookie(res, sessionId);
    res.redirect(`${CLIENT_URL}${redirectPath}`);
  } catch (error) {
    res.redirect(`${CLIENT_URL}/login?error=${encodeURIComponent(error.message)}&redirect=${encodeURIComponent(redirectPath)}`);
  }
};

export const getCurrentUser = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logout = (req, res) => {
  deleteSession(req.sessionId);
  clearSessionCookie(res);

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};
