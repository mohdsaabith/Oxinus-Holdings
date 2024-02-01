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
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Logout from "@mui/icons-material/Logout";

import PersonIcon from "@mui/icons-material/Person";
import { FaUsers } from "react-icons/fa";
import { MdPayment } from "react-icons/md";

import { HiNewspaper, HiOfficeBuilding } from "react-icons/hi";

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

import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { TbCircle } from "react-icons/tb";
import Avatar from "@mui/material/Avatar";

import { useMenuOpen } from "../context/menuOpenContext";

const drawerWidth = 250;

const create = [
  {
    title: "Invoice",
    icon: <Article className="text-2xl" />,
    link: "#",
  },
  {
    title: "Receipt",
    icon: <ReceiptLong className="text-2xl" />,
    link: "#",
  },
  {
    title: "Users",
    icon: <FaUsers className="text-2xl" />,
    link: "/master/user-master/add",
  },
];

const data: any = [
  {
    title: "Dashboard",
    icon: <RxDashboard className="text-2xl" />,
    link: "/dashboard",
  },
  {
    title: "Admin",
    icon: <AdminPanelSettings className="text-2xl" />,
    options: [
      {
        title: "Users",
        icon: <TbCircle className="text-xs" />,
        link: "/master/user-master",
      },
      {
        title: "Agents",
        icon: <TbCircle className="text-xs" />,
        link: "/agents",
      },
      {
        title: "Vendors",
        icon: <TbCircle className="text-xs" />,
        link: "/vendors",
      },
    ],
  },
  {
    title: "Rentals",
    icon: <HiOfficeBuilding className="text-2xl" />,
    options: [
      {
        title: "Tenants",
        icon: <TbCircle className="text-xs" />,
        link: "/master/tenant-master",
      },
      {
        title: "Units",
        icon: <TbCircle className="text-xs" />,
        link: "/master/units",
      },
      {
        title: "Buildings",
        icon: <TbCircle className="text-xs" />,
        link: "/master/building-master",
      },
      {
        title: "Building owners",
        icon: <TbCircle className="text-xs" />,
        link: "/master/building-owners",
      },
    ],
  },
  {
    title: "Agreements",
    icon: <HiNewspaper className="text-2xl" />,
    options: [
      {
        title: "Listing",
        icon: <TbCircle className="text-xs" />,
        link: "/rental/rental-agreement",
      },
      {
        title: "Create",
        icon: <TbCircle className="text-xs" />,
        link: "/rental/rental-agreement/add",
      },
    ],
  },
  {
    title: "Finance",
    icon: <MdPayment className="text-2xl" />,
    options: [
      {
        title: "Invoice",
        icon: <TbCircle className="text-xs" />,
        link: "/accounting/invoice",
      },
      {
        title: "Receipt",
        icon: <TbCircle className="text-xs" />,
        link: "/accounting/receipt",
      },
      {
        title: "Bill",
        icon: <TbCircle className="text-xs" />,
        link: "/accounting/bills",
      },
      {
        title: "Payment",
        icon: <TbCircle className="text-xs" />,
        link: "/finance/payments",
      },
      {
        title: "Outstanding Invoices",
        icon: <TbCircle className="text-xs" />,
        link: "/outstanding-invoices",
      },
      {
        title: "PDC",
        icon: <TbCircle className="text-xs" />,
        link: "/finance/pdc",
      },
    ],
  },
  {
    title: "Accounting",
    icon: <AccountBalance className="text-2xl" />,
    options: [
      {
        title: "Account Categories",
        icon: <TbCircle className="text-xs" />,
        link: "/banking/account-category",
      },
      {
        title: "Chart of Accounts",
        icon: <TbCircle className="text-xs" />,
        link: "/banking/account",
      },
      {
        title: "Accounts Tree",
        icon: <TbCircle className="text-xs" />,
        link: "/accounts-tree",
      },
      {
        title: "Journal",
        icon: <TbCircle className="text-xs" />,
        link: "/accounting/journal",
      },

      // {
      //   title: "Account Type Summary",
      //   icon: <TbCircle className="text-xs" />,
      //   link: "/reports/account-type-summary",
      // },
      {
        title: "Account Summary",
        icon: <TbCircle className="text-xs" />,
        link: "/reports/account-summary",
      },
      {
        title: "Account Statement",
        icon: <TbCircle className="text-xs" />,
        link: "/reports/account-statement",
      },
    ],
  },
  {
    title: "Settings",
    icon: <Settings className="text-2xl" />,
    link: "/settings",
  },
];

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

  let color = "#";

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

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader className=" ">
          <div className="flex items-center">
            {open ? (
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            ) : (
              <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                sx={{
                  color: "white",
                  ml: 4,
                  ...(open ? { display: "none" } : {}),
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </div>
        </DrawerHeader>
        {open ? (
          <div className="ml-4 mb-5">
            <div className="w-[100px] h-[16px] bg-primary "></div>
            <p className="text-2xl font-bold text-slate-300">AL QANDEEL</p>
          </div>
        ) : null}

        <List>
          {data &&
            data.length >= 0 &&
            data?.map((item: any, index: number) =>
              !hideMenu || index < 9 ? (
                <div key={item.title}>
                  {item?.options?.length && item?.options?.length > 0 ? (
                    <ListItem disablePadding sx={{ display: "block" }}>
                      <ListItemButton
                        onClick={() => {
                          setOpen(true);
                          setMenuOpen({
                            ...menuOpen,
                            [index]: menuOpen ? !menuOpen[index] : true,
                          });
                        }}
                        sx={{
                          minHeight: 48,
                          justifyContent: open ? "initial" : "center",
                          px: 2.5,
                        }}
                        selected={item.link === router.pathname ? true : false}
                      >
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                          }}
                          className="flex items-start "
                        >
                          {item.icon}
                        </ListItemIcon>

                        <ListItemText
                          primary={item.title}
                          sx={{
                            opacity: open ? 1 : 0,
                          }}
                        />
                        {menuOpen && menuOpen[index] ? (
                          <>
                            {open && <ExpandLess sx={{ display: "hidden" }} />}
                          </>
                        ) : (
                          <>
                            {open && <ExpandMore sx={{ display: "hidden" }} />}
                          </>
                        )}
                      </ListItemButton>
                      <Collapse
                        in={menuOpen && menuOpen[index]}
                        timeout="auto"
                        unmountOnExit
                      >
                        {item.options?.map((option: any, i: number) => (
                          <Link href={option.link} key={i}>
                            <List component="div" disablePadding>
                              <ListItemButton
                                sx={{ pl: open ? 4 : 1 }}
                                selected={
                                  option.link === router.pathname ? true : false
                                }
                              >
                                <ListItemIcon>{option.icon}</ListItemIcon>
                                <ListItemText primary={option.title} />
                              </ListItemButton>
                            </List>
                          </Link>
                        ))}
                      </Collapse>
                    </ListItem>
                  ) : (
                    <Link href={item.link ?? "#"}>
                      <ListItem disablePadding sx={{ display: "block" }}>
                        <ListItemButton
                          sx={{
                            minHeight: 48,
                            justifyContent: open ? "initial" : "center",
                            px: 2.5,
                          }}
                          selected={
                            item.link === router.pathname ? true : false
                          }
                        >
                          <ListItemIcon
                            sx={{
                              minWidth: 0,
                              mr: open ? 3 : "auto",
                              justifyContent: "center",
                            }}
                            className="flex items-start"
                          >
                            {item.icon}
                          </ListItemIcon>

                          <ListItemText
                            primary={item.title}
                            sx={{ opacity: open ? 1 : 0 }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </Link>
                  )}
                </div>
              ) : null
            )}
        </List>
        {data.length > 9 && (
          <button
            onClick={() => {
              setHideMenu(!hideMenu);
              setOpen(true);
            }}
          >
            <p className="flex items-center py-3 px-6 gap-6  text-white">
              {!open && hideMenu && <ExpandMore />}
              {!open && !hideMenu && <ExpandLess />}
              {open && hideMenu ? "Show more" : "Show more"}
              {open && !hideMenu ? <ExpandLess /> : <ExpandMore />}
            </p>
          </button>
        )}
      </Drawer>
      <div className="w-full bg-alabaster">
        <div className="flex bg-alabaster ">
          <div className="flex justify-between w-full bg-white py-[26px]">
            <div className="ml-6">
              <div className="text-[#A0A9AF] font-medium text-xs">
                Hii {user.username}
              </div>
              <div className="text-xl font-semibold">Welcome Back.</div>
            </div>
            <div className="md:w-52 w-30 md:mr-10 py-2">
              <div className="flex items-center md:gap-x-3 gap-x-1 justify-end">
                <div className="w-10">
                  <Avatar
                    {...stringAvatar(user.username)}
                    className="md:w-10 md:h-10 w-8 h-8 rounded-full"
                  />
                </div>
                <div className="w-15">
                  <p className="text-[#23395d] font-bold text-sm md:text-base capitalize">
                    {user.username}
                  </p>
                  <p className="text-[#23395d] font-medium md:text-sm text-xs capitalize">
                    {user.role}
                  </p>
                </div>
                <button
                  className="w-10"
                  id="basic-button"
                  aria-controls={openPop ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openPop ? "true" : undefined}
                  onClick={handleClickPop}
                >
                  {openPop ? (
                    <MdOutlineKeyboardArrowUp className="text-inherit md:w-[30px] md:h-[30px] w-[20px] h-[20px]" />
                  ) : (
                    <MdOutlineKeyboardArrowDown className="text-inherit md:w-[30px] md:h-[30px] w-[20px] h-[20px]" />
                  )}
                </button>
              </div>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={openPop}
                onClose={handleClosePop}
                onClick={handleClosePop}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem
                  onClick={() => {
                    router.push("/my-profile");
                  }}
                >
                  <ListItemIcon>
                    <PersonIcon fontSize="small" />
                  </ListItemIcon>
                  My Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClosePop();
                    // handleLogout();
                  }}
                >
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
        <div className="w-full min-h-screen bg-alabaster p-6 h-full">
          {children}
        </div>
      </div>
    </Box>
  );
}
