import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { Fab, Stack, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { T } from "../../../libs/types/command";
import { Messages } from "../../../libs/config";
import { LoginInput, MemberInput } from "../../../libs/types/member";
import MemberService from "../../services/MemberService";
import { toast } from "sonner";
import { useGlobals } from "../../hooks/useGlobals";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: "#000",
    border: "2px solid #a7ac6f",

    padding: theme.spacing(2, 2, 2),
  },
}));

interface AuthenticationModalProps {
  signupOpen: boolean;
  loginOpen: boolean;
  handleSignupClose: () => void;
  handleLoginClose: () => void;
}

export default function AuthenticationModal(props: AuthenticationModalProps) {
  const { signupOpen, loginOpen, handleSignupClose, handleLoginClose } = props;
  const classes = useStyles();
  const [memberNick, setMemberNick] = useState<string>("");
  const [memberPhone, setMemberPhone] = useState<string>("");
  const [memberPassword, setMemberPassword] = useState<string>("");
  const { setAuthMember } = useGlobals();

  /** HANDLERS **/

  const handleUsername = (e: T) => {
    setMemberNick(e.target.value);
  };

  const handlePhone = (e: T) => {
    setMemberPhone(e.target.value);
  };

  const handlePassword = (e: T) => {
    setMemberPassword(e.target.value);
  };
  const handlePasswordKeyDown = (e: T) => {
    if (e.key === "Enter" && signupOpen) {
      handleSignupRequest().then();
    } else if (e.key === "Enter" && loginOpen) {
      handleLoginRequest();
    }
  };

  const handleSignupRequest = async () => {
    try {
      const isFully =
        memberNick !== "" && memberPhone !== "" && memberPassword !== "";
      if (!isFully) throw new Error(Messages.error3);

      const signupInput: MemberInput = {
        memberNick: memberNick,
        memberPhone: memberPhone,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.signup(signupInput);

      setAuthMember(result);
      handleSignupClose();
      toast.success("Successfully Signed up🎉");
    } catch (error) {
      console.log(error);
      handleSignupClose();
      toast.error("Signup failed. Please try again❗️");
    }
  };

  const handleLoginRequest = async () => {
    try {
      const isFully = memberNick !== "" && memberPassword !== "";
      if (!isFully) throw new Error(Messages.error3);

      const loginInput: LoginInput = {
        memberNick: memberNick,
        memberPassword: memberPassword,
      };

      const member = new MemberService();
      const result = await member.login(loginInput);

      setAuthMember(result);
      handleLoginClose();
      toast.success("Successfully Logged in🎉");
    } catch (err) {
      console.log(err);
      handleLoginClose();

      toast.error("Login failed. Please try again❗️");
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={signupOpen}
        onClose={handleSignupClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{ zIndex: 1500 }}
      >
        <Fade in={signupOpen}>
          <Stack
            className={classes.paper}
            direction={"row"}
            sx={{
              width: "800px",
              minHeight: "400px",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#5f5f5f3b",
              backdropFilter: "blur(5px)",
              borderRadius: "20px",
              zIndex: 1500,
            }}
          >
            <Stack sx={{ flex: 1 }}>
              <h2
                style={{
                  fontFamily: "Lato",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "25px",
                  letterSpacing: "-0.5px",
                  textAlign: "center",
                  position: "relative",
                  paddingBottom: "10px",
                  borderBottom: "2px solid #a7ac6f",
                  width: "fit-content",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Create New Account
              </h2>
              <TextField
                sx={{
                  width: "100%",
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    background: "rgba(255,255,255,0.05)",
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.2)",
                    },
                    "&:hover fieldset": {
                      borderColor: "#a7ac6f",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a7ac6f",
                      boxShadow: "0 0 0 3px rgba(167,172,111,0.2)",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontFamily: "Lato",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff",
                    "&.Mui-focused": { color: "#a7ac6f" },
                  },
                }}
                label="username"
                variant="outlined"
                onChange={handleUsername}
              />
              <TextField
                sx={{
                  width: "100%",
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    background: "rgba(255,255,255,0.05)",
                    "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                    "&:hover fieldset": { borderColor: "#a7ac6f" },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a7ac6f",
                      boxShadow: "0 0 0 3px rgba(167,172,111,0.2)",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontFamily: "Lato",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#fff",
                    "&.Mui-focused": { color: "#a7ac6f" },
                  },
                }}
                label="phone number"
                variant="outlined"
                onChange={handlePhone}
              />
              <TextField
                sx={{
                  width: "100%",
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    background: "rgba(255,255,255,0.05)",
                    "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                    "&:hover fieldset": { borderColor: "#a7ac6f" },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a7ac6f",
                      boxShadow: "0 0 0 3px rgba(167,172,111,0.2)",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontFamily: "Lato",
                  },
                  "& .MuiInputLabel-root": {
                    color: "#ffffff",
                    "&.Mui-focused": { color: "#a7ac6f" },
                  },
                }}
                label="password"
                variant="outlined"
                type="password"
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
              />
              <Fab
                sx={{
                  width: "150px",
                  height: "50px",
                  marginTop: "10px",
                  alignSelf: "center",
                  background: "#00000004",
                  color: "#a7ac6f",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "#a7ac6f",
                    color: "#ffffff",
                  },
                }}
                variant="extended"
                onClick={handleSignupRequest}
              >
                <LoginIcon sx={{ mr: 1 }} />
                Signup
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={loginOpen}
        onClose={handleLoginClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        sx={{ zIndex: 1500 }}
      >
        <Fade in={loginOpen}>
          <Stack
            className={classes.paper}
            direction={"row"}
            sx={{
              width: "700px",
              minHeight: "400px",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(95,95,95,0.23)",
              backdropFilter: "blur(5px)",
              borderRadius: "20px",
              pointerEvents: "auto",
              zIndex: 1500,
            }}
          >
            <Stack sx={{ flex: 1, alignItems: "center" }}>
              <h2
                style={{
                  fontFamily: "Lato",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: "#fff",
                  marginBottom: "25px",
                  letterSpacing: "-0.5px",
                  textAlign: "center",
                  position: "relative",
                  paddingBottom: "10px",
                  borderBottom: "2px solid #a7ac6f",
                  width: "fit-content",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Login Form
              </h2>
              <TextField
                sx={{
                  width: "100%",
                  mb: 2,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.05)",
                    "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                    "&:hover fieldset": { borderColor: "#a7ac6f" },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a7ac6f",
                      boxShadow: "0 0 0 3px rgba(167,172,111,0.2)",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontFamily: "Lato",
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255,255,255,0.6)",
                    "&.Mui-focused": { color: "#a7ac6f" },
                  },
                }}
                label="username"
                variant="outlined"
                onChange={handleUsername}
              />
              <TextField
                sx={{
                  width: "100%",
                  mb: 3,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.05)",
                    "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                    "&:hover fieldset": { borderColor: "#a7ac6f" },
                    "&.Mui-focused fieldset": {
                      borderColor: "#a7ac6f",
                      boxShadow: "0 0 0 3px rgba(167,172,111,0.2)",
                    },
                  },
                  "& .MuiInputBase-input": {
                    color: "#fff",
                    fontFamily: "Lato",
                  },
                  "& .MuiInputLabel-root": {
                    color: "rgba(255,255,255,0.6)",
                    "&.Mui-focused": { color: "#a7ac6f" },
                  },
                }}
                label="password"
                variant="outlined"
                type="password"
                onChange={handlePassword}
                onKeyDown={handlePasswordKeyDown}
              />
              <Fab
                sx={{
                  width: "150px",
                  height: "50px",
                  marginTop: "10px",
                  alignSelf: "center",
                  background: "#00000004",
                  color: "#a7ac6f",
                  fontWeight: 700,
                  letterSpacing: "1px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    background: "#a7ac6f",
                    color: "#ffffff",
                  },
                }}
                variant="extended"
                onClick={handleLoginRequest}
              >
                Login
              </Fab>
            </Stack>
          </Stack>
        </Fade>
      </Modal>
    </div>
  );
}
