import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import { Select, Button, Avatar, Badge } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { FaUserShield } from "react-icons/fa6";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoIosNotifications, IoIosArrowDown } from "react-icons/io";
import { LuLayoutDashboard } from "react-icons/lu";
import { TbFileInvoice } from "react-icons/tb";
import { GiShoppingBag } from "react-icons/gi";
import { RiToolsFill } from "react-icons/ri";
import { LuHelpingHand } from "react-icons/lu";
import { useMenuOpen } from "../context/menuOpenContext";

import type { MenuProps } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export default function MiniDrawer({ children }: any) {
  const { menuOpen, setMenuOpen } = useMenuOpen();
  const [open, setOpen] = React.useState(true);

  const [menuDrawerOpen, setMenuDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
    setMenuOpen(false);
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
          <div className="md:flex justify-between bg-[#FAFAFD] w-full  pt-[26px] ">
            <div className="ml-6 md:mb-0 sm:mb-2 mb-2">
              <div className="md:text-xl text-base text-black font-semibold flex md:justify-center justify-start items-center gap-1">
                <FaUserShield className="text-[#12B2B3] " /> Management -{" "}
                <span className="text-[#12B2B3]">Device List</span>
              </div>
            </div>

            <div className="md:gap-6 md:flex justify-center items-center">
              <div className="md:mb-0 sm:mb-2 mb-2">
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

              <div className="md:mb-0 sm:mb-2 mb-2">
                <Badge count={23} color="#12B2B3">
                  <Button size="large" className="bg-white">
                    <IoIosNotifications />
                  </Button>
                </Badge>
              </div>

              <div className="flex md:justify-center justify-start items-center">
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
