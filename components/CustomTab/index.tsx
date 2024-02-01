import React from "react";
import { Select, Button, Input, DatePicker } from "antd";
import type { DatePickerProps } from "antd";
import { MdOutlineFileDownload } from "react-icons/md";
import { LuPrinter } from "react-icons/lu";
import { FaPlus } from "react-icons/fa6";

export default function index() {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <div className="bg-white mb-5 rounded-[8px] p-5">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-3">
          <div>
            <Select
              size="large"
              placeholder="Device Type"
              style={{ width: 150 }}
              onChange={handleChange}
              options={[
                { value: "iphone", label: "iPhone" },
                { value: "samsung", label: "Samsung" },
              ]}
            />
          </div>
          <div>
            <Input size="large" placeholder="Enter device name here" />
          </div>

          <div>
            <DatePicker onChange={onChange} size="large" />
          </div>

          <div>
            <Button size="large" className="text-black border border-black">
              Search
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3">
          <div>
            <Button
              size="large"
              className="text-[#0D8182] border border-[#0D8182] gap-1 flex justify-center items-center"
            >
              <MdOutlineFileDownload />
              Export
            </Button>
          </div>
          <div>
            <Button
              size="large"
              className="text-[#0D8182] border border-[#0D8182] gap-1 flex justify-center items-center"
            >
              <LuPrinter /> Print
            </Button>
          </div>
          <div>
            <Button
              size="large"
              className="flex justify-center items-center bg-[#0D8182] text-white gap-1"
            >
              <FaPlus /> Register New Device
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
