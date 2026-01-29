import { Box, Container, Stack } from "@mui/material";
import { Settings } from "./Settings";
import "../../../css/userPage.css";
import { useHistory } from "react-router-dom";
import { useGlobals } from "../../hooks/useGlobals";
import { serverApi } from "../../../libs/config";
import { MemberType } from "../../../libs/enums/member.enum";

export default function UserPage() {
  const history = useHistory();
  const { authMember } = useGlobals();

  if (!authMember) history.push("/");
  return (
    <div className={"user-page"}>
      <Container>
        <Stack className={"my-page-frame"}>
          <Stack className={"my-page-left"}>
            <Box display={"flex"} flexDirection={"column"}>
              <Box className={"menu-name"}>Modify Member Details</Box>
              <Box className={"menu-content"}>
                <Settings />
              </Box>
            </Box>
          </Stack>

          <Stack className={"my-page-right"}>
            <Box className={"order-info-box"}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <div className={"order-user-img"}>
                  <img
                    src={
                      authMember?.memberImage
                        ? `${serverApi}/${authMember.memberImage}`
                        : "/icons/default-user.svg"
                    }
                    className={"order-user-avatar"}
                    alt=""
                  />
                  <div className={"order-user-icon-box"}>
                    <img
                      alt=""
                      src={
                        authMember?.memberType === MemberType.RESTAURANT
                          ? "/icons/restaurant.svg"
                          : "/icons/user-badge.svg"
                      }
                    />
                  </div>
                </div>
                <span className={"order-user-name"}>
                  {authMember?.memberNick}
                </span>
                <span className={"order-user-prof"}>
                  {authMember?.memberType}
                </span>
                <span className={"order-user-prof"}>
                  {authMember?.memberAddress
                    ? authMember?.memberAddress
                    : "no address"}
                </span>
              </Box>
              <Box className={"user-media-box"}>
                <a href="https://instagram.com/javoxir__karimov">
                  <img src="/icons/instagram.png" alt=""></img>
                </a>
                <a href="https://t.me/javoxir_karimov">
                  <img src="/icons/telegram.png" alt="" />
                </a>
                <a href="https://youtube.com/Karimov_Javokhir">
                  <img src="/icons/facebook.png" alt="" />
                </a>{" "}
              </Box>
              <p className={"user-desc"}>
                {authMember?.memberDesc
                  ? authMember?.memberDesc
                  : "No description"}
              </p>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
