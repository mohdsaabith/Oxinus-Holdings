import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";

import List from "@mui/material/List";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useRouter } from "next/router";
import Link from "next/link";
import MuiDrawer from "@mui/material/Drawer";
import { Select, Button, Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { MdPayment } from "react-icons/md";
import { FaUserShield } from "react-icons/fa6";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { HiNewspaper, HiOfficeBuilding } from "react-icons/hi";
import { IoIosNotifications, IoIosArrowDown } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbFileInvoice } from "react-icons/tb";
import { GiShoppingBag } from "react-icons/gi";
import { RiToolsFill } from "react-icons/ri";
import { LuHelpingHand } from "react-icons/lu";
import { RxDashboard } from "react-icons/rx";
import {
  AccountBalance,
  AdminPanelSettings,
  Article,
  ExpandLess,
  ExpandMore,
  ReceiptLong,
  Settings,
} from "@mui/icons-material";
import { Collapse } from "@mui/material";

import { TbCircle } from "react-icons/tb";

import { useMenuOpen } from "../context/menuOpenContext";

import type { MenuProps } from "antd";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const drawerWidth = 250;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

// const data: any = [
//   {
//     title: "Dashboard",
//     icon: <RxDashboard className="text-2xl" />,
//     link: "/dashboard",
//   },
//   {
//     title: "Invoices",
//     icon: <AdminPanelSettings className="text-2xl" />,
//     options: [
//       {
//         title: "Users",
//         icon: <TbCircle className="text-xs" />,
//         link: "/master/user-master",
//       },
//       {
//         title: "Agents",
//         icon: <TbCircle className="text-xs" />,
//         link: "/agents",
//       },
//       {
//         title: "Vendors",
//         icon: <TbCircle className="text-xs" />,
//         link: "/vendors",
//       },
//     ],
//   },
//   {
//     title: "Management",
//     icon: <HiOfficeBuilding className="text-2xl" />,
//     options: [
//       {
//         title: "Devices",
//         icon: <TbCircle className="text-xs" />,
//         link: "/",
//       },
//       {
//         title: "Users & Roles",
//         icon: <TbCircle className="text-xs" />,
//         link: "/master/units",
//       },
//     ],
//   },
//   {
//     title: "Billing",
//     icon: <HiNewspaper className="text-2xl" />,
//     options: [
//       {
//         title: "Listing",
//         icon: <TbCircle className="text-xs" />,
//         link: "/rental/rental-agreement",
//       },
//       {
//         title: "Create",
//         icon: <TbCircle className="text-xs" />,
//         link: "/rental/rental-agreement/add",
//       },
//     ],
//   },
//   {
//     title: "Tools",
//     icon: <MdPayment className="text-2xl" />,
//     options: [
//       {
//         title: "Invoice",
//         icon: <TbCircle className="text-xs" />,
//         link: "/accounting/invoice",
//       },
//       {
//         title: "Receipt",
//         icon: <TbCircle className="text-xs" />,
//         link: "/accounting/receipt",
//       },
//     ],
//   },

//   {
//     title: "Settings",
//     icon: <Settings className="text-2xl" />,
//     link: "/settings",
//   },
// ];

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
function stringToColor(string: string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string?.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#ECF9F9";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name?.split(" ")[0][0]}`,
  };
}

export default function MiniDrawer({ children }: any) {
  const router = useRouter();
  const { menuOpen, setMenuOpen } = useMenuOpen();
  const [open, setOpen] = React.useState(true);

  const [menuDrawerOpen, setMenuDrawerOpen] = React.useState(false);

  const [hideMenu, setHideMenu] = React.useState(true);
  const [hideCreate, setHideCreate] = React.useState(true);
  const [user, setUser] = React.useState<any>({ username: "", role: "" });

  const handleMenuHide = () => {
    setHideMenu(!hideMenu);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setMenuOpen(false);
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openPop = Boolean(anchorEl);

  const handleClickPop = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePop = () => {
    setAnchorEl(null);
  };

  const items: MenuProps["items"] = [
    getItem("Navigation One", "sub1", <MailOutlined />, [
      getItem(
        "Item 1",
        "g1",
        null,
        [getItem("Option 1", "1"), getItem("Option 2", "2")],
        "group"
      ),
      getItem(
        "Item 2",
        "g2",
        null,
        [getItem("Option 3", "3"), getItem("Option 4", "4")],
        "group"
      ),
    ]),

    getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),

    { type: "divider" },

    getItem("Navigation Three", "sub4", <SettingOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),

    getItem(
      "Group",
      "grp",
      null,
      [getItem("Option 13", "13"), getItem("Option 14", "14")],
      "group"
    ),
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <div className="bg-[#FAFAFD]">
        <div
          className={
            open
              ? "m-3 bg-[#ECF9F9] h-full w-[15rem] rounded-[8px] pt-[1rem]"
              : "m-3 bg-[#ECF9F9] h-full w-[5rem] rounded-[8px] pt-[1rem]"
          }
        >
          {/* <Menu
            onClick={onClick}
            style={{ width: 256 }}
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
          /> */}

          <div className="mx-3">
            {" "}
            <div className="text-black ">
              {open ? (
                <div className="flex justify-start items-center">
                  <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon className="text-black" />
                  </IconButton>
                  <p className="text-xl font-medium text-black">
                    GREEN <span className="font-bold">PEOPLE</span>
                  </p>
                </div>
              ) : (
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  sx={{
                    color: "black",
                    ml: 1,
                    ...(open ? { display: "none" } : {}),
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              {open ? (
                <div className="mx-1 mt-[2rem] mb-5 ">
                  <div className="w-full h-[3.5rem] bg-white flex justify-between items-center px-[8px] rounded-[8px]">
                    <div>
                      <span className="font-bold">TECH</span>LOGO
                    </div>
                    <MdOutlineArrowForwardIos className="" />
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className="border border-3 border-white mb-5"></div>

          <div>
            {open ? (
              <div>
                <div className="flex justify-start items-center cursor-pointer hover:bg-slate-200 hover:rounded-[8px] hover:mx-[5px]">
                  <IconButton onClick={handleDrawerClose}>
                    <LuLayoutDashboard className="text-black" />
                  </IconButton>
                  <p className="text-base font-medium text-black">Dashboard</p>
                </div>

                <div
                  className="flex justify-between items-center pr-5 cursor-pointer hover:bg-slate-200 hover:rounded-[8px] hover:mx-[5px]"
                  onClick={() => setMenuDrawerOpen(!menuDrawerOpen)}
                >
                  <div className="flex justify-center items-center">
                    <IconButton onClick={handleDrawerClose}>
                      <TbFileInvoice className="text-black" />
                    </IconButton>
                    <p className="text-base font-medium text-black">Invoices</p>
                    {menuDrawerOpen ?? <div>helllo</div>}
                  </div>
                  {menuDrawerOpen ? (
                    <IoIosArrowDown />
                  ) : (
                    <MdOutlineArrowForwardIos className="" />
                  )}
                </div>
              </div>
            ) : (
              <div>
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  sx={{
                    color: "black",
                    ml: 2,
                    ...(open ? { display: "none" } : {}),
                  }}
                >
                  <LuLayoutDashboard />
                </IconButton>

                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  sx={{
                    color: "black",
                    ml: 2,
                    ...(open ? { display: "none" } : {}),
                  }}
                >
                  <TbFileInvoice />
                </IconButton>
              </div>
            )}
          </div>

          <div className="border border-3 border-white my-5"></div>

          <div>
            {open ? (
              <div>
                <div
                  className="flex justify-between items-center pr-5 cursor-pointer hover:bg-slate-200 hover:rounded-[8px] hover:mx-[5px]"
                  onClick={() => setMenuDrawerOpen(!menuDrawerOpen)}
                >
                  <div className="flex justify-center items-center">
                    <IconButton onClick={handleDrawerClose}>
                      <FaUserShield className="text-black" />
                    </IconButton>
                    <p className="text-base font-medium text-black">
                      Management
                    </p>
                    {menuDrawerOpen ?? <div>helllo</div>}
                  </div>
                  {menuDrawerOpen ? (
                    <IoIosArrowDown />
                  ) : (
                    <MdOutlineArrowForwardIos className="" />
                  )}
                </div>

                <div
                  className="flex justify-between items-center pr-5 cursor-pointer hover:bg-slate-200 hover:rounded-[8px] hover:mx-[5px]"
                  onClick={() => setMenuDrawerOpen(!menuDrawerOpen)}
                >
                  <div className="flex justify-center items-center">
                    <IconButton onClick={handleDrawerClose}>
                      <GiShoppingBag className="text-black" />
                    </IconButton>
                    <p className="text-base font-medium text-black">Billing</p>
                    {menuDrawerOpen ?? <div>helllo</div>}
                  </div>
                  {menuDrawerOpen ? (
                    <IoIosArrowDown />
                  ) : (
                    <MdOutlineArrowForwardIos className="" />
                  )}
                </div>

                <div
                  className="flex justify-between items-center pr-5 cursor-pointer hover:bg-slate-200 hover:rounded-[8px] hover:mx-[5px]"
                  onClick={() => setMenuDrawerOpen(!menuDrawerOpen)}
                >
                  <div className="flex justify-center items-center">
                    <IconButton onClick={handleDrawerClose}>
                      <RiToolsFill className="text-black" />
                    </IconButton>
                    <p className="text-base font-medium text-black">Tools</p>
                    {menuDrawerOpen ?? <div>helllo</div>}
                  </div>
                  {menuDrawerOpen ? (
                    <IoIosArrowDown />
                  ) : (
                    <MdOutlineArrowForwardIos className="" />
                  )}
                </div>
              </div>
            ) : (
              <div>
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  sx={{
                    color: "black",
                    ml: 2,
                    ...(open ? { display: "none" } : {}),
                  }}
                >
                  <FaUserShield />
                </IconButton>

                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  sx={{
                    color: "black",
                    ml: 2,
                    ...(open ? { display: "none" } : {}),
                  }}
                >
                  <GiShoppingBag />
                </IconButton>

                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  sx={{
                    color: "black",
                    ml: 2,
                    ...(open ? { display: "none" } : {}),
                  }}
                >
                  <RiToolsFill />
                </IconButton>
              </div>
            )}
          </div>

          <div className="border border-3 border-white my-5"></div>

          <div>
            {open ? (
              <div>
                <div className="flex justify-start items-center cursor-pointer hover:bg-slate-200 hover:rounded-[8px] hover:mx-[5px]">
                  <IconButton onClick={handleDrawerClose}>
                    <LuHelpingHand className="text-black" />
                  </IconButton>
                  <p className="text-base font-medium text-black">
                    Help Center
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <IconButton
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  sx={{
                    color: "black",
                    ml: 2,
                    ...(open ? { display: "none" } : {}),
                  }}
                >
                  <LuHelpingHand />
                </IconButton>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full bg-[#FAFAFD]">
        <div className="flex  justify-between items-center mx-6">
          <div className="flex justify-between bg-[#FAFAFD] w-full  pt-[26px]">
            <div className="ml-6">
              <div className="text-xl text-black font-semibold flex justify-center items-center gap-1">
                <FaUserShield className="text-[#12B2B3] " /> Management -{" "}
                <span className="text-[#12B2B3]">Device List</span>
              </div>
            </div>
            <div className="gap-6 flex justify-center items-center">
              <div>
                <Select
                  size="large"
                  defaultValue="english"
                  style={{ width: 120 }}
                  onChange={handleChange}
                  options={[
                    { value: "english", label: "English" },
                    { value: "malayalam", label: "Malayalam" },
                    { value: "hindi", label: "Hindi" },
                    { value: "arabic", label: "Arabic" },
                  ]}
                />
              </div>

              <div>
                <Badge count={23} color="#12B2B3">
                  <Button size="large" className="bg-white">
                    <IoIosNotifications />
                  </Button>
                </Badge>
              </div>

              <div className="flex justify-center items-center">
                <Badge dot className="">
                  <Avatar size="large" shape="square" icon={<UserOutlined />} />
                </Badge>
                <Select
                  className=""
                  size="large"
                  defaultValue="MKaravidas"
                  style={{ width: 150 }}
                  onChange={handleChange}
                  options={[
                    { value: "MKaravidas", label: "M Karavidas" },
                    { value: "rahul", label: "Rahul" },
                    { value: "aslam", label: "Aslam" },
                    { value: "abhu", label: "Abhu" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-screen bg-[#FAFAFD] p-6 h-full">
          {children}
        </div>
      </div>
    </Box>
  );
}

//  <Drawer variant="permanent" open={open} className="p-[1rem]">
//    <DrawerHeader className={open ? `flex justify-start items-center` : ``}>
//      <div className=" ">
//        {open ? (
//          <div className="flex justify-start items-center">
//            <IconButton onClick={handleDrawerClose}>
//              <ChevronLeftIcon className="text-black" />
//            </IconButton>
//            <p className="text-xl font-medium text-black">
//              GREEN <span className="font-bold">PEOPLE</span>
//            </p>
//          </div>
//        ) : (
//          <IconButton
//            aria-label="open drawer"
//            onClick={handleDrawerOpen}
//            sx={{
//              color: "black",
//              ml: 4,
//              ...(open ? { display: "none" } : {}),
//            }}
//          >
//            <MenuIcon />
//          </IconButton>
//        )}
//      </div>
//    </DrawerHeader>
//    {open ? (
//      <div className="mx-4 mb-5 ">
//        <div className="w-full h-[3.5rem] bg-white flex justify-between items-center px-[12px] ">
//          <div>
//            <span className="font-bold">TECH</span>LOGO
//          </div>
//          <MdOutlineArrowForwardIos className="" />
//        </div>
//      </div>
//    ) : null}

//    <List>
//      {data &&
//        data.length >= 0 &&
//        data?.map((item: any, index: number) =>
//          !hideMenu || index < 9 ? (
//            <div key={item.title}>
//              {item?.options?.length && item?.options?.length > 0 ? (
//                <ListItem disablePadding sx={{ display: "block" }}>
//                  <ListItemButton
//                    onClick={() => {
//                      setOpen(true);
//                      setMenuOpen({
//                        ...menuOpen,
//                        [index]: menuOpen ? !menuOpen[index] : true,
//                      });
//                    }}
//                    sx={{
//                      minHeight: 48,
//                      justifyContent: open ? "initial" : "center",
//                      px: 2.5,
//                    }}
//                    selected={item.link === router.pathname ? true : false}
//                  >
//                    <ListItemIcon
//                      sx={{
//                        minWidth: 0,
//                        mr: open ? 3 : "auto",
//                        justifyContent: "center",
//                      }}
//                      className="flex items-start "
//                    >
//                      {item.icon}
//                    </ListItemIcon>

//                    <ListItemText
//                      primary={item.title}
//                      sx={{
//                        opacity: open ? 1 : 0,
//                      }}
//                    />
//                    {menuOpen && menuOpen[index] ? (
//                      <>{open && <ExpandLess sx={{ display: "hidden" }} />}</>
//                    ) : (
//                      <>{open && <ExpandMore sx={{ display: "hidden" }} />}</>
//                    )}
//                  </ListItemButton>
//                  <Collapse
//                    in={menuOpen && menuOpen[index]}
//                    timeout="auto"
//                    unmountOnExit
//                  >
//                    {item.options?.map((option: any, i: number) => (
//                      <Link href={option.link} key={i}>
//                        <List component="div" disablePadding>
//                          <ListItemButton
//                            sx={{ pl: open ? 4 : 1 }}
//                            selected={
//                              option.link === router.pathname ? true : false
//                            }
//                          >
//                            {/* <ListItemIcon>{option.icon}</ListItemIcon> */}
//                            <ListItemText primary={option.title} />
//                          </ListItemButton>
//                        </List>
//                      </Link>
//                    ))}
//                  </Collapse>
//                </ListItem>
//              ) : (
//                <Link href={item.link ?? "#"}>
//                  <ListItem disablePadding sx={{ display: "block" }}>
//                    <ListItemButton
//                      sx={{
//                        minHeight: 48,
//                        justifyContent: open ? "initial" : "center",
//                        px: 2.5,
//                      }}
//                      selected={item.link === router.pathname ? true : false}
//                    >
//                      <ListItemIcon
//                        sx={{
//                          minWidth: 0,
//                          mr: open ? 3 : "auto",
//                          justifyContent: "center",
//                        }}
//                        className="flex items-start"
//                      >
//                        {item.icon}
//                      </ListItemIcon>

//                      <ListItemText
//                        primary={item.title}
//                        sx={{ opacity: open ? 1 : 0 }}
//                      />
//                    </ListItemButton>
//                  </ListItem>
//                </Link>
//              )}
//            </div>
//          ) : null
//        )}
//    </List>
//    {data.length > 9 && (
//      <button
//        onClick={() => {
//          setHideMenu(!hideMenu);
//          setOpen(true);
//        }}
//      >
//        <p className="flex items-center py-3 px-6 gap-6  text-white">
//          {!open && hideMenu && <ExpandMore />}
//          {!open && !hideMenu && <ExpandLess />}
//          {open && hideMenu ? "Show more" : "Show more"}
//          {open && !hideMenu ? <ExpandLess /> : <ExpandMore />}
//        </p>
//      </button>
//    )}
//  </Drawer>;
